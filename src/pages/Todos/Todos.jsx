import { SearchForm, TodoList, Notification, Filter } from 'components';
import { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { addTodoThunk, fetchTodosThunk } from 'reduxStore/operations';
import { selectFilter, selectToDos } from 'reduxStore/selectors';

const Todos = () => {
  const dispatch = useDispatch();
  const todos = useSelector(selectToDos);
  console.log(todos);

  useEffect(() => {
    dispatch(fetchTodosThunk())
  }, [dispatch])

  const filter = useSelector(selectFilter) || '';
  const onSubmit = ({ text }) => {
    dispatch(addTodoThunk({ text }));
  };


  const getFilteredTodo = () => {
    return todos.filter(({ text }) => text.toLowerCase().includes(filter.toLowerCase()));
  };
  const filteredTodo = getFilteredTodo();
  return (
    <>
      <SearchForm onSubmit={onSubmit} icon="create" />
      {todos.length === 0 && <Notification text="All tasks are completed! 😉" />}
      {todos.length > 0 && (
        <>
          <Filter handleChange={() => {}} />
          {filteredTodo.length ? (
            <TodoList todos={filteredTodo} />
          ) : (
            <Notification text={`Not find TODO ${filter}!`} />
          )}
        </>
      )}
    </>
  );
};

export default Todos;

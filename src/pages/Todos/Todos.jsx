import { SearchForm, TodoList, Notification, Filter } from 'components';
import { nanoid } from 'nanoid';

import { useDispatch, useSelector } from 'react-redux';
import { selectFilter, selectToDos } from 'reduxStore/selectors';
import { addTodo } from 'reduxStore/toDoSlice';

const Todos = () => {
  const dispatch = useDispatch();
  const todos = useSelector(selectToDos);
  const filter = useSelector(selectFilter) || '';
  const onSubmit = ({ text }) => {
    const toDo = { text, id: nanoid() };
    dispatch(addTodo(toDo));
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

import {
  SearchForm,
  TodoList,
  Notification,
  Filter,
  Loader,
  Heading,
  EditToDoForm,
} from 'components';
import { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { addTodoThunk, deleteAllTodosThunk, fetchTodosThunk } from 'reduxStore/todos/operations';
import {
  selectCurrentToDo,
  selectError,
  selectFilteredTodos,
  selectLoading,
  selectToDos,
} from 'reduxStore/selectors';

const Todos = () => {
  const dispatch = useDispatch();
  const todos = useSelector(selectToDos);
  const isLoading = useSelector(selectLoading);
  const error = useSelector(selectError);
  const currentToDo = useSelector(selectCurrentToDo);
  const filteredTodo = useSelector(selectFilteredTodos);
  useEffect(() => {
    dispatch(fetchTodosThunk());
  }, [dispatch]);

  const onSubmit = ({ text }) => {
    dispatch(addTodoThunk({ text }));
  };

  return (
    <>
      {!currentToDo ? <SearchForm onSubmit={onSubmit} icon="create" /> : <EditToDoForm />}
      {todos.length >= 2 && (
        <button type="button" onClick={() => dispatch(deleteAllTodosThunk())}>
          DELETE ALL
        </button>
      )}
      {todos.length === 0 && !error && <Notification text="All tasks are completed! 😉" />}
      {todos.length > 0 && (
        <>
          <Filter handleChange={() => {}} />
          {filteredTodo.length ? (
            <TodoList todos={filteredTodo} />
          ) : (
            <Notification text={`Not find TODO!`} />
          )}
        </>
      )}
      {isLoading && <Loader />}
      {error && <Heading title={'Something went wrong... Try again later.'} error top />}
    </>
  );
};

export default Todos;

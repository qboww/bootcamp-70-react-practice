import { SearchForm, TodoList, Notification } from 'components';
import { nanoid } from 'nanoid';

import { useLocalStorage } from '../../hooks/useLocalStorage';

export const Todos = () => {
  const [todos, setTodos] = useLocalStorage('todos', []);

  const onSubmit = ({ text }) => {
    const toDo = { text, id: nanoid() };
    setTodos([...todos, toDo]);
  };

  const handleDelete = todoId => {
    setTodos(
      todos.filter(item => {
        return item.id !== todoId;
      })
    );
  };

  return (
    <div>
      <SearchForm onSubmit={onSubmit} />
      {todos.length ? (
        <TodoList todos={todos} handleDelete={handleDelete} />
      ) : (
        <Notification text="All tasks are completed! 😉" />
      )}
    </div>
  );
};

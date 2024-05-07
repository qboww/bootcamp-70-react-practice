import { SearchForm, TodoList, Notification, Filter } from 'components';
import { nanoid } from 'nanoid';

import { useLocalStorage } from '../../hooks/useLocalStorage';
import { useState } from 'react';

export const Todos = () => {
  const [todos, setTodos] = useLocalStorage('todos', []);
  const [filter, setFilter] = useState('');

  const onSubmit = ({ text }) => {
    const toDo = { text, id: nanoid() };
    setTodos([...todos, toDo]);
  };

  const handleChange = e => {
    setFilter(e.target.value);
  };

  const handleDelete = todoId => {
    setTodos(
      todos.filter(item => {
        return item.id !== todoId;
      })
    );
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
          <Filter handleChange={handleChange} />
          {filteredTodo.length ? (
            <TodoList todos={filteredTodo} handleDelete={handleDelete} />
          ) : (
            <Notification text={`Not find TODO ${filter}!`} />
          )}
        </>
      )}
    </>
  );
};

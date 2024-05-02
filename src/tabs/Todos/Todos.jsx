import { Form, TodoList } from 'components';
import { nanoid } from 'nanoid';

import { useLocalStorage } from '../../hooks/useLocalStorage';

export const Todos = () => {
  const [todos, setTodos] = useLocalStorage('todos', []);

  const onSubmit = text => {
    const toDo = { text, id: nanoid() };
    setTodos([...todos, toDo]);
  };
  console.log(todos);
  return (
    <div>
      <Form onSubmit={onSubmit} />
      <TodoList todos={todos} />
    </div>
  );
};

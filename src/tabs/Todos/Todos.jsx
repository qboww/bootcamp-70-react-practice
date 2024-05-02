import { Form } from 'components';
import { nanoid } from 'nanoid';

export const Todos = () => {
  const onSubmit = text => {
    const toDo = { text, id: nanoid() };
    console.log(toDo);
  };
  return (
    <div>
      <Form onSubmit={onSubmit} />
    </div>
  );
};

export const TodoList = ({ todos }) => {
  console.log(todos);
  return (
    <ul>
      {todos.map(item => (
        <li key={item.id}>{item.text}</li>
      ))}
    </ul>
  );
};

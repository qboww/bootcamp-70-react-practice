export const TodoList = ({ todos, handleDelete }) => {
  return (
    <ul>
      {todos.map(item => (
        <li key={item.id}>
          {item.text}
          <button onClick={() => handleDelete(item.id)}>Remove</button>
        </li>
      ))}
    </ul>
  );
};

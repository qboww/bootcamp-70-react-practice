import s from './TodoList.module.css';
import { FaTrash } from 'react-icons/fa';

export const TodoList = ({ todos, handleDelete }) => {
  return (
    <ul className={s.todoList}>
      {todos.map(item => (
        <li className={s.todoItem} key={item.id}>
          <div className={s.box}>
            <h3 className={s.todoHeading}>{item.text}</h3>
            <button className={s.todoButton} onClick={() => handleDelete(item.id)}>
              <FaTrash />
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
};

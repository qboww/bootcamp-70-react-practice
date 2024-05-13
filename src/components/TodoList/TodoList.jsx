import { useSelector } from 'react-redux';
import s from './TodoList.module.css';
import { FaTrash } from 'react-icons/fa';
import { selectToDos } from 'reduxStore/selectors';

export const TodoList = ({ handleDelete }) => {
  const todos = useSelector(selectToDos);
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

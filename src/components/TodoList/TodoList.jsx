import { useDispatch } from 'react-redux';
import s from './TodoList.module.css';
import { FaTrash } from 'react-icons/fa';
import { deleteTodo } from 'reduxStore/actions';

export const TodoList = ({ todos }) => {
  const dispatch = useDispatch();
  return (
    <ul className={s.todoList}>
      {todos.map(item => (
        <li className={s.todoItem} key={item.id}>
          <div className={s.box}>
            <h3 className={s.todoHeading}>{item.text}</h3>
            <button className={s.todoButton} onClick={() => dispatch(deleteTodo(item.id))}>
              <FaTrash />
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
};

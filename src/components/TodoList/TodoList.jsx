import { useDispatch } from 'react-redux';
import s from './TodoList.module.css';
import { FaTrash } from 'react-icons/fa';
import { RiEdit2Line } from 'react-icons/ri';
import { deleteTodoThunk } from 'reduxStore/todos/operations';
import { addCurrentToDo } from 'reduxStore/todos/toDoSlice';

export const TodoList = ({ todos }) => {
  const dispatch = useDispatch();
  return (
    <ul className={s.todoList}>
      {todos.map(item => (
        <li className={s.todoItem} key={item.id}>
          <div className={s.box}>
            <h3 className={s.todoHeading}>{item.text}</h3>
            <button className={s.todoButton} onClick={() => dispatch(deleteTodoThunk(item.id))}>
              <FaTrash />
            </button>
            <button onClick={() => dispatch(addCurrentToDo(item))}>
              <RiEdit2Line size={24} />
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
};

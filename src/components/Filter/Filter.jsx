import s from './Filter.module.css';
import { filterTodo } from 'reduxStore/actions';
import { useDispatch } from 'react-redux';

export const Filter = () => {
  const dispatch = useDispatch();
  return (
    <>
      <h3 className={s.filterHeading}>Find your TODO</h3>
      <input
        className={s.filterInput}
        type="text"
        onChange={e => {
          dispatch(filterTodo(e.target.value));
        }}
      />
    </>
  );
};

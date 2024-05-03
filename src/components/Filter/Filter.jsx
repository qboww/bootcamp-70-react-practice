import s from './Filter.module.css';

export const Filter = ({ handleChange }) => {
  return (
    <>
      <h3 className={s.filterHeading}>Find your TODO</h3>
      <input className={s.filterInput} type="text" onChange={handleChange} />
    </>
  );
};

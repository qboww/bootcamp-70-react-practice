import s from './BackDrop.module.css';
export const BackDrop = ({ children, onClick }) => {
  return (
    <div onClick={onClick} className={s.backdrop}>
      {children}
    </div>
  );
};

import s from './Natification.module.css';
export const Natification = ({ text }) => {
  return <h3 className={s.title}>{text}</h3>;
};

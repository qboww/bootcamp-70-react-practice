import s from './Notification.module.css';
export const Notification = ({ text }) => {
  return <h3 className={s.title}>{text}</h3>;
};

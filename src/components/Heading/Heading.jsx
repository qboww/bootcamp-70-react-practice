import clsx from 'clsx';
import s from './Heading.module.css';
export const Heading = ({ title, top, bottom, info }) => {
  return (
    <h2
      className={clsx(s.title, {
        [s.top]: top,
        [s.bottom]: bottom,
        [s.info]: info,
      })}
    >
      {title}
    </h2>
  );
};

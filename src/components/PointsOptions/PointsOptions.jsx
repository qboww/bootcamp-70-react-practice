import clsx from 'clsx';
import { Heading } from '../Heading/Heading';
import s from './PointsOptions.module.css';

export const PointsOptions = ({ points, onLeavePoint, total, resetPoints }) => {
  return (
    <div>
      <Heading title="Leave Point" bottom />
      <ul className={s.list}>
        {points.map((point, index) => (
          <li className={clsx(s.item, { [s[point]]: point })} key={point}>
            <button onClick={() => onLeavePoint(point, index + 1)}>{point}</button>
          </li>
        ))}
      </ul>
      {
        total > 0 && <button className={s.btn_reset} onClick={resetPoints}>Reset all points</button>
      }
    </div>
  );
};

import clsx from 'clsx';
import { Heading } from '../Heading/Heading';
import s from './PointsOptions.module.css';
import { useDispatch } from 'react-redux';
import { resetPoints, setPoint } from 'reduxStore/pointsSlice';

export const PointsOptions = ({ points, total }) => {
  const dispatch = useDispatch()

  return (
    <div>
      <Heading title="Leave Point" bottom />
      <ul className={s.list}>
        {points.map((point, index) => (
          <li className={clsx(s.item, { [s[point]]: point })} key={point}>
            <button onClick={() => dispatch(setPoint({point, value:index + 1}))}>{point}</button>
          </li>
        ))}
      </ul>
      {
        total > 0 && <button className={s.btn_reset} onClick={()=>dispatch(resetPoints())}>Reset all points</button>
      }
    </div>
  );
};

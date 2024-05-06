import { ClimbingBoxLoader } from 'react-spinners';
import s from './Loader.module.css';

export const Loader = () => {
  return (
    <div className={s.backdrop}>
      <ClimbingBoxLoader color="#36bed6" />
    </div>
  );
};

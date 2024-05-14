import { PointsOptions, PointsStatistic } from 'components';
import { Notification } from '../../components';

import { useSelector } from 'react-redux';
import { selectPoints } from 'reduxStore/selectors';


const Points = () => {
  const points = useSelector(selectPoints)
  

  const countTotalPoints = () => {
    return Object.values(points).reduce((acc, value) => acc + value, 0);
  };
  const resetPoints = () => {
    // setPoints(initialState);
  };
  const total = countTotalPoints();
  return (
    <div>
      <PointsOptions
        points={Object.keys(points)}
        total={total}
        resetPoints={resetPoints}
      />
      {total > 0 ? (
        <PointsStatistic total={total} statistics={Object.entries(points)} />
      ) : (
        <Notification text="No points" />
      )}
    </div>
  );
};

export default Points;

import { PointsOptions, PointsStatistic } from 'components';
import { Notification } from '../../components';

import { useLocalStorage } from 'hooks/useLocalStorage';

const initialState = { one: 0, two: 0, three: 0, four: 0, five: 0 };

const Points = () => {
  const [points, setPoints] = useLocalStorage('points', initialState);

  const handelClick = (point, value) => {
    setPoints(prev => ({ ...prev, [point]: prev[point] + value }));
  };
  const countTotalPoints = () => {
    return Object.values(points).reduce((acc, value) => acc + value, 0);
  };
  const resetPoints = () => {
    setPoints(initialState);
  };
  const total = countTotalPoints();
  return (
    <div>
      <PointsOptions
        points={Object.keys(points)}
        onLeavePoint={handelClick}
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

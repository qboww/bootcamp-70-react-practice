import { useState } from 'react';
import { PointsOptions, PointsStatistic } from 'components';
import { Natification } from '../../components';
import { useEffect } from 'react';

const initialState = { one: 0, two: 0, three: 0, four: 0, five: 0 };

export const Points = () => {
  const [points, setPoints] = useState(() => JSON.parse(window.localStorage.getItem('points')) || initialState);

  useEffect(() => {
    window.localStorage.setItem('points', JSON.stringify(points));
  }, [points]);

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
        <Natification text="No points" />
      )}
    </div>
  );
};

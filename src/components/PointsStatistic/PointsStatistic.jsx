import { Heading } from '../Heading/Heading';

export const PointsStatistic = ({ statistics, total }) => {
  return (
    <div>
      <Heading title={`Total points: ${total}`} bottom />
      <ul>
        {statistics.map(([key, value]) => {
          return (
            <li key={key}>
              {key}: {value}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

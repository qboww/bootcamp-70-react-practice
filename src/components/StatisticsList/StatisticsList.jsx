import { StatisticsListItem } from "../StatisticsListItem/StatisticsListItem";

export const StatisticsList = ({ stats, title }) => {
  return (
    <div>
      {title && <h3>{title}</h3>}
      <ul>
        {stats.map(item => {
          return (
            <li key={item.id}>
              <StatisticsListItem title={item.title} total={item.total} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

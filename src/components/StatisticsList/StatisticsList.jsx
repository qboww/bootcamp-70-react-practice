import { StatisticsListItem } from "../StatisticsListItem/StatisticsListItem";

export const StatisticsList = ({ stats, title }) => {
  return (
    <div>
      {title && <h2>{title}</h2>}
      <ul>
        {stats.map((item) => {
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

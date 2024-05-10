import { BlogCard, Heading, StatisticsList } from 'components/index';
import article from 'data/article.json';
import stats from 'data/stats.json';

const Props = () => {
  return (
    <>
      <Heading title="Blog Card" bottom />
      <BlogCard {...article} />
      <Heading title="Statistics" top bottom />
      <StatisticsList title="statistic list" stats={stats} />
    </>
  );
};

export default Props;

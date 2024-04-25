import { BlogCard } from "./components/BlogCard/BlogCard";
import { StatisticsList } from "./components/StatisticsList/StatisticsList";
import article from "./data/article.json";
import stats from "./data/stats.json";

function App() {
  return (
    <>
      <BlogCard {...article} />
      <StatisticsList stats={stats} title="Statistics" />
    </>
  );
}

export default App;

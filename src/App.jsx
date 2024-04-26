import { Container, Section, StatisticsList, BlogCard } from "components";
import article from "data/article.json";
import stats from "data/stats.json";

function App() {
  return (
    <Section>
      <Container>
        <BlogCard {...article} />
        <StatisticsList stats={stats} title="Statistics" />
      </Container>
    </Section>
  );
}

export default App;

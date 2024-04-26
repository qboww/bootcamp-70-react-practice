import { Container, Section, StatisticsList, BlogCard } from "components";
import article from "data/article.json";
import stats from "data/stats.json";
import { Heading } from './components';

function App() {
  return (
    <Section>
      <Container>
        <Heading title="Blog Card" bottom />
        <BlogCard {...article} />
        <Heading title="Statistics" top bottom />
        <StatisticsList title="statistic list" stats={stats} />
      </Container>
    </Section>
  );
}

export default App;

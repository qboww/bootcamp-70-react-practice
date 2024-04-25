import { BlogCard } from "./components/BlogCard/BlogCard";
import article from "./data/article.json";

function App() {
  return (
    <>
      <BlogCard {...article} />
    </>
  );
}

export default App;

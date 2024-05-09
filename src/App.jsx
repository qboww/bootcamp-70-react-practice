import { Header } from 'components';

import { Images, Points, Props, Todos } from './pages';
import { Route, Routes } from 'react-router-dom';
import { Home } from 'pages/Home/Home';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/images" element={<Images />} />
        <Route path="/points" element={<Points />} />
        <Route path="/props" element={<Props />} />
        <Route path="/todos" element={<Todos />} />
      </Routes>
      {/* <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Home />} />
          <Route path="/images" element={<Images />} />
          <Route path="/points" element={<Points />} />
          <Route path="/props" element={<Props />} />
          <Route path="/todos" element={<Todos />} />
        </Route>
      </Routes> */}
    </>
  );
}

export default App;

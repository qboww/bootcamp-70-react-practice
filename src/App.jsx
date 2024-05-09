import { Header } from 'components';

import { Images, Points, Props, Todos } from './pages';
import { Route, Routes } from 'react-router-dom';
import { Home } from 'pages/Home/Home';
import { Countries } from 'pages/Countries/Countries';
import { CountrieInfo } from 'pages/CountrieInfo/CountrieInfo';

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
        <Route path="/countries" element={<Countries />} />
        <Route path="/countries/:countryId" element={<CountrieInfo />} />

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

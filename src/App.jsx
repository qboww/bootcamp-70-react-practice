import { Header } from 'components';
import { Suspense, lazy } from 'react';

import { Navigate, Route, Routes } from 'react-router-dom';
import { easyLazy } from 'helpers';

const Home = lazy(() => import('pages/Home/Home'));
const Images = lazy(() => import('pages/Images/Images'));
const Points = lazy(() => import('pages/Points/Points'));

const Todos = easyLazy('Todos');
const Countries = easyLazy('Countries');
const SearchCountry = easyLazy('SearchCountry');
const CountrieInfo = easyLazy('CountrieInfo');
const Props = easyLazy('Props');
const RegisterPage = easyLazy('RegisterPage');

function App() {
  return (
    <>
      <Header />
      <Suspense fallback={'null'}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<RegisterPage />} />

          <Route path="/images" element={<Images />} />
          <Route path="/points" element={<Points />} />
          <Route path="/props" element={<Props />} />
          <Route path="/todos" element={<Todos />} />
          <Route path="/countries" element={<Countries />} />
          <Route path="/searchCountry" element={<SearchCountry />} />
          <Route path="/countries/:countryId" element={<CountrieInfo />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Suspense>
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

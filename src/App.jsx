import { Header } from 'components';
import { Suspense, lazy, useEffect } from 'react';

import { Navigate, Route, Routes } from 'react-router-dom';
import { easyLazy } from 'helpers';
import { useDispatch, useSelector } from 'react-redux';
import { refreshUserThunk } from 'reduxStore/auth/operations';
import PrivateRoute from 'components/PrivateRoute/PrivateRoute';
import RestrictedRoute from 'components/RestrictedRoute/RestrictedRoute';
import { selectIsRefreshing } from 'reduxStore/auth/selectors';

const Home = lazy(() => import('pages/Home/Home'));
const Images = lazy(() => import('pages/Images/Images'));
const Points = lazy(() => import('pages/Points/Points'));

const Todos = easyLazy('Todos');
const Countries = easyLazy('Countries');
const SearchCountry = easyLazy('SearchCountry');
const CountrieInfo = easyLazy('CountrieInfo');
const Props = easyLazy('Props');
const RegisterPage = easyLazy('RegisterPage');
const LoginPage = easyLazy('LoginPage');

function App() {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);
  useEffect(() => {
    dispatch(refreshUserThunk());
  }, [dispatch]);
  return (
    <>
      {isRefreshing ? (
        <p>Refresh user</p>
      ) : (
        <>
          <Header />
          <Suspense fallback={'null'}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route
                path="/register"
                element={<RestrictedRoute component={<RegisterPage />} redirectTo="/todos" />}
              />
              <Route
                path="/login"
                element={<RestrictedRoute component={<LoginPage />} redirectTo="/todos" />}
              />

              <Route
                path="/images"
                element={<PrivateRoute component={<Images />} redirectTo="/login" />}
              />
              <Route
                path="/points"
                element={<PrivateRoute component={<Points />} redirectTo="/login" />}
              />
              <Route
                path="/props"
                element={<PrivateRoute component={<Props />} redirectTo="/login" />}
              />
              <Route
                path="/todos"
                element={<PrivateRoute component={<Todos />} redirectTo="/login" />}
              />
              <Route
                path="/countries"
                element={<PrivateRoute component={<Countries />} redirectTo="/login" />}
              />
              <Route
                path="/searchCountry"
                element={<PrivateRoute component={<SearchCountry />} redirectTo="/login" />}
              />
              <Route
                path="/countries/:countryId"
                element={<PrivateRoute component={<CountrieInfo />} redirectTo="/login" />}
              />
              <Route path="*" element={<Navigate to="/" />} />
            </Routes>
          </Suspense>
        </>
      )}
    </>
  );
}

export default App;

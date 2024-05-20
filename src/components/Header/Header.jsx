import { NavLink } from 'react-router-dom';
import { Container } from 'components';
import s from './Header.module.css';
import clsx from 'clsx';
import { AuthNav } from 'components/AuthNav/AuthNav';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'reduxStore/auth/selectors';

export const Header = () => {
  const activeLink = ({ isActive }) => {
    return clsx(isActive && s.active);
  };
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <>
      <header className={s.header}>
        <Container>
          <nav>
            <ul className={s.list}>
              <li>
                <NavLink className={activeLink} to="/">
                  Home
                </NavLink>
              </li>
              {!isLoggedIn ? <AuthNav /> : <UserMenu />}
            </ul>
          </nav>
        </Container>
      </header>
      {/* <Outlet /> */}
    </>
  );
};

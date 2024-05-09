import { NavLink } from 'react-router-dom';
import { Container } from 'components';
import s from './Header.module.css';
import clsx from 'clsx';

export const Header = () => {
  const activeLink = ({ isActive }) => {
    return clsx(isActive && s.active);
  };
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
              <li>
                <NavLink className={activeLink} to="/images">
                  Images
                </NavLink>
              </li>
              <li>
                <NavLink className={activeLink} to="/points">
                  Points
                </NavLink>
              </li>
              <li>
                <NavLink className={activeLink} to="/props">
                  Props
                </NavLink>
              </li>
              <li>
                <NavLink className={activeLink} to="/todos">
                  Todos
                </NavLink>
              </li>
              <li>
                <NavLink className={activeLink} to="/countries">
                  Countries
                </NavLink>
              </li>
            </ul>
          </nav>
        </Container>
      </header>
      {/* <Outlet /> */}
    </>
  );
};

import clsx from 'clsx';
import { NavLink } from 'react-router-dom';
import s from './AuthNav.module.css';

export const AuthNav = () => {
  const activeLink = ({ isActive }) => {
    return clsx(isActive && s.active);
  };
  return (
    <>
      <li>
        <NavLink className={activeLink} to="/register">
          Register
        </NavLink>
      </li>
      <li>
        <NavLink className={activeLink} to="/login">
          Login
        </NavLink>
      </li>
    </>
  );
};

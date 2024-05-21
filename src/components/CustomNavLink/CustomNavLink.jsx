import { NavLink } from 'react-router-dom';
import s from './CustomNavLink.module.css';
import clsx from 'clsx';

export const CustomNavLink = ({ children, path }) => {
  const activeLink = ({ isActive }) => {
    return clsx(isActive && s.active);
  };
  return <NavLink to={path} className={activeLink}>{children}</NavLink>;
};

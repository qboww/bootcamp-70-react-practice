import clsx from 'clsx';
import { NavLink } from 'react-router-dom';
import s from './UserMenu.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from 'reduxStore/auth/selectors';
import { fetchLogoutThunk } from 'reduxStore/auth/operations';
export const UserMenu = () => {
  const dispatch = useDispatch();
  const activeLink = ({ isActive }) => {
    return clsx(isActive && s.active);
  };

  const user = useSelector(selectUser);
  return (
    <>
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
      <li>
        <NavLink className={activeLink} to="/searchCountry">
          Search Country
        </NavLink>
      </li>
      <li>Welcome, {user.name}</li>
      <li>
        <button
          type="button"
          onClick={() => {
            dispatch(fetchLogoutThunk());
          }}
        >
          Log out
        </button>
      </li>
    </>
  );
};

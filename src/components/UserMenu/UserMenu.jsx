import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from 'reduxStore/auth/selectors';
import { fetchLogoutThunk } from 'reduxStore/auth/operations';
import { CustomNavLink } from 'components';
export const UserMenu = () => {
  const dispatch = useDispatch();

  const user = useSelector(selectUser);
  return (
    <>
      <li>
        <CustomNavLink path="/images">Images</CustomNavLink>
      </li>
      <li>
        <CustomNavLink path="/points">Points</CustomNavLink>
      </li>
      <li>
        <CustomNavLink path="/props">Props</CustomNavLink>
      </li>
      <li>
        <CustomNavLink path="/todos">Todos</CustomNavLink>
      </li>
      <li>
        <CustomNavLink path="/countries">Countries</CustomNavLink>
      </li>
      <li>
        <CustomNavLink path="/searchCountry">Search Country</CustomNavLink>
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

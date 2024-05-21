import { CustomNavLink } from 'components';

export const AuthNav = () => {

  return (
    <>
      <li>
        <CustomNavLink path="/register">
          Register
        </CustomNavLink>
      </li>
      <li>
        <CustomNavLink path="/login">
          Login
        </CustomNavLink>
      </li>
    </>
  );
};

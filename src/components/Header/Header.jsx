import { Container, CustomNavLink } from 'components';
import s from './Header.module.css';
import { AuthNav } from 'components/AuthNav/AuthNav';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'reduxStore/auth/selectors';

export const Header = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <>
      <header className={s.header}>
        <Container>
          <nav>
            <ul className={s.list}>
              <li>
                <CustomNavLink path="/">Home</CustomNavLink>
              </li>
              {!isLoggedIn ? <AuthNav /> : <UserMenu />}
            </ul>
          </nav>
        </Container>
      </header>
    </>
  );
};

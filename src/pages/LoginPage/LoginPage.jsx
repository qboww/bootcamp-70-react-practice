import { useDispatch } from 'react-redux';
import { fetchLoginThunk } from 'reduxStore/auth/operations';

const LoginPage = () => {
  const dispatch = useDispatch();
  const handleSubmit = e => {
    e.preventDefault();
    const { email, password } = e.currentTarget.elements;
    dispatch(fetchLoginThunk({ email: email.value, password: password.value }));
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="email" name="email" />
        <input type="password" name="password" />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginPage;

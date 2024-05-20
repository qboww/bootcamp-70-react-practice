import { useDispatch } from 'react-redux';
import { fetchRegisterThunk } from 'reduxStore/auth/operations';

const RegisterPage = () => {
  const dispatch = useDispatch();

  const handlesubmit = e => {
    e.preventDefault();
    const { name, email, password } = e.currentTarget.elements;
    dispatch(
      fetchRegisterThunk({ name: name.value, email: email.value, password: password.value })
    );
  };
  return (
    <div>
      <form onSubmit={handlesubmit}>
        <input type="text" name="name" />
        <input type="email" name="email" />
        <input type="password" name="password" />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default RegisterPage;

import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { selectIsLoggedIn } from "reduxStore/auth/selectors";

const RestrictedRoute = ({ component: Component, redirectTo = '/' }) => {
    const isloggedIn = useSelector(selectIsLoggedIn)
  return isloggedIn ? <Navigate to={redirectTo}/> : Component;
};

export default RestrictedRoute;

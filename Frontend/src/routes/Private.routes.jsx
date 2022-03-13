import { Navigate, Route, useLocation } from "react-router-dom";
import { useCookies } from "react-cookie";
const PrivateRoute = ({ children, user, role }) => {
  const [cookies, setCookie, removeCookie] = useCookies();

  return cookies?.user?.role === user ? children : <Navigate to={`/${user}Login`} />;
};

export default PrivateRoute;

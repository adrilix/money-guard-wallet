import { useSelector } from 'react-redux';
import { Outlet, Navigate } from 'react-router-dom';

const PublicRoute = () => {
  const isLogin = useSelector((state) => state.auth.isLogin);
  if (isLogin) {
    return <Navigate to="/home" />;
  }
  return <Outlet />;
};
export default PublicRoute;

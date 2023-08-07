import { Outlet, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const PrivateRoute = () => {
    const isLogin = useSelector((state) => state.auth.isLogin);
    
  if (!isLogin) {
    return <Navigate to="/" />;
  }
  return <Outlet />;
};
export default PrivateRoute;

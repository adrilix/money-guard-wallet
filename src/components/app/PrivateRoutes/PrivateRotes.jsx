import { Outlet, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const PrivateRoute = () => {
    const token = useSelector((state)=>state.auth.token)
  if (!token) {
    return <Navigate to="/" />;
  }
  return <Outlet />;
};
export default PrivateRoute;

import { useSelector } from 'react-redux';
import { isLogin } from '../redux/registrationReducer/registrationSelector';

const UseAuth = () => {
  const isAuth = useSelector(isLogin);

  return isAuth;
};

export default UseAuth;

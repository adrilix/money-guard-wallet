import React from 'react';
import { LoginSection, LoginStyled } from './loginPage.styled';
import logoImg from '../../svg/logo.svg';
import LoginForm from 'components/LoginForm/LoginForm';
import { useDispatch } from 'react-redux';
import UseAuth from 'HOC/useAuth';
import { Navigate } from 'react-router-dom';
import { logInThunk } from 'redux/registrationReducer/registrationThunks';
import { ToastContainer } from 'react-toastify';
const LoginPage = () => {
  const dispatch = useDispatch();
  const onLogin = data => {
    dispatch(logInThunk(data));
  };
  const isLogin = UseAuth();

  if (isLogin) {
    return <Navigate to="/home" />;
  }
  return (
    <LoginSection>
      <LoginStyled className="wrapper">
        <div className="inner">
          <div className="logo">
            <img src={logoImg} alt="logoImg" width="36" />
            <span className="logoText">Money Guard</span>
          </div>
          <LoginForm onSubmit={onLogin} />
        </div>
      </LoginStyled>
      <ToastContainer />
    </LoginSection>
  );
};

export default LoginPage;

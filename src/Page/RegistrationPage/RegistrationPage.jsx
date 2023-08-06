import React from 'react';
import { ToastContainer } from 'react-toastify';
import logoImg from '../../svg/logo.svg';

import { LoginSection, LoginStyled } from './registerPage.styled';
import RegisterForm from 'components/RegisterForm/RegisterForm';
import { useDispatch } from 'react-redux';
import UseAuth from 'HOC/useAuth';
import { Navigate } from 'react-router-dom';
import { registerThunk } from 'redux/registrationReducer/registrationThunks';

const RegisterPage = () => {
  const dispatch = useDispatch();
  const onSignUp = data => {
    dispatch(registerThunk(data));
  };
  const isLogin = UseAuth();
  if (isLogin) {
    return <Navigate to="/nopage" />;
  }

  return (
    <LoginSection>
      <LoginStyled className="wrapper">
        <div className="inner">
          <div className="logo">
            <img src={logoImg} alt="logoImg" width="36" />
            <span className="logoText">Money Guard</span>
          </div>
          <RegisterForm onSubmit={onSignUp} />
        </div>
      </LoginStyled>
      <ToastContainer />
    </LoginSection>
  );
};

export default RegisterPage;

import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';

import {
  ButtonCancel,
  ButtonLogOut,
  ButtonWrapper,
  Logo,
  LogoTitle,
  ModalBackdrop,
  ModalContent,
  Title,
} from './LogOutModal.Styled';
import logo from '../../svg/logo.svg';

export const LogOutModal = ({ showIt, setShowIt, handleLogOut }) => {
  
  useEffect(() => {
    if (showIt) {
      document.addEventListener('keydown', handleClose);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.removeEventListener('keydown', handleClose);
      document.body.style.overflow = '';
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [showIt]);


  const handleClose = event => {
    if (event.code === 'Escape' || event.target === event.currentTarget) {
      hideLogOutModal();
    }
  };

  const hideLogOutModal = () => {
    setShowIt(false);
  };

  return createPortal(
    showIt && (
      <>
        <ModalBackdrop onClick={hideLogOutModal} />

        <ModalContent>
          <ButtonWrapper>
            <Logo src={logo} alt="logo" />
            <LogoTitle>Money Guard</LogoTitle>
            <Title>Are you sure you want to log out?</Title>

            <ButtonLogOut type="button" onClick={handleLogOut}>
              Logout
            </ButtonLogOut>
            <ButtonCancel type="button" onClick={handleClose}>
              Cansel
            </ButtonCancel>
          </ButtonWrapper>
        </ModalContent>
      </>
    ),
    document.getElementById('modal-root')
  );
};

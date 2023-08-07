import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Button, ButtonWrapper, ModalBackdrop, ModalContent, Title } from './LogOutModal.Styled';

export const LogOutModal = ({ showIt, setShowIt, handleLogOut }) => {
  useEffect(() => {
    if (showIt) {
      document.addEventListener('keydown', handleClose);
    }
    return () => document.removeEventListener('keydown', handleClose);
  }, [showIt]);

  const handleClose = (event) => {
    if (event.code === 'Escape' || event.target === event.currentTarget) {
      hideLogOutModal();
    }
  };

  const hideLogOutModal = () => {
    setShowIt(false);
  };

  return createPortal(
    showIt && (<>
        <ModalBackdrop onClick={hideLogOutModal} />
        <ModalContent>
              <Title>Log out from Wallet?</Title>
              <ButtonWrapper>
          <Button type="button" onClick={handleLogOut}>
            LOG OUT
          </Button>
          <Button type="button" onClick={hideLogOutModal}>
            CANCEL
            </Button>
            </ButtonWrapper>
        </ModalContent>
      </>
    ),
    document.getElementById('modal-root')
  );
};

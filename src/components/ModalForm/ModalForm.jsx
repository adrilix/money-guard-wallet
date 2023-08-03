import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { IoIosClose } from 'react-icons/io';
import {
  Box,
  ButtonIcon,
  ModalBackdrop,
  ModalContent,
} from './ModalFormStyled';

const modalRoot = document.querySelector('#modal-root');

function ModalForm({
  children = '',
  handleKeyDown = () => {},
  handleBackdropClick = () => {},
  closeModal = () => {},
}) {
  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleKeyDown]);
  return createPortal(
    <ModalBackdrop onClick={handleBackdropClick}>
      <ModalContent>
        <Box>
          <ButtonIcon
            type="button"
            onClick={closeModal}
            aria-label="close modal"
          >
            <IoIosClose size="40px" />
          </ButtonIcon>
        </Box>
        {children}
      </ModalContent>
    </ModalBackdrop>,
    modalRoot
  );
}

export default ModalForm;

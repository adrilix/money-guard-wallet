import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { ButtonIcon, ModalBackdrop, ModalContent } from './ModalFormStyled';
import { IoIosClose } from 'react-icons/io';

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
        <div>
          <ButtonIcon
            type="button"
            onClick={closeModal}
            aria-label="close modal"
          >
            <IoIosClose size="40px" />
          </ButtonIcon>
        </div>
        {children}
      </ModalContent>
    </ModalBackdrop>,
    modalRoot
  );
}

export default ModalForm;

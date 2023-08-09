import React, { useEffect } from 'react';

import { createPortal } from 'react-dom';
import { IoIosClose } from 'react-icons/io';
import { ButtonIcon, ModalBackdrop, ModalContent } from './ModalFormStyled';

const modalRoot = document.querySelector('#modal-root');

export default function Modal({
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
        <ButtonIcon type="button" onClick={closeModal} aria-label="close modal">
          <IoIosClose
            style={{ width: '20px', height: '20px', position: 'relative' }}
          />
        </ButtonIcon>

        {children}
      </ModalContent>
    </ModalBackdrop>,
    modalRoot
  );
}

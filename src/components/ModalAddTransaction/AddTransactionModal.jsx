import React from 'react';
import ModalAddTransaction from './ModalAddTransaction';

import useToggleModal from 'HOC/useToggleModal';
import Modal from 'components/ModalForm/ModalForm';
import { AddBtn, BtnRightCorner } from 'components/Table/TableStyled';
import { AiOutlinePlus } from 'react-icons/ai';

const AddTransactionModal = () => {
  const { isOpen, openModal, closeModal, handleKeyDown, handleBackdropClick } =
    useToggleModal();
  return (
    <div>
      <BtnRightCorner>
        <AddBtn onClick={() => openModal()}>
          <AiOutlinePlus />
        </AddBtn>
      </BtnRightCorner>

      {isOpen && (
        <Modal
          closeModal={() => closeModal()}
          handleKeyDown={handleKeyDown}
          handleBackdropClick={handleBackdropClick}
        >
          <ModalAddTransaction closeModal={closeModal} />
        </Modal>
      )}
    </div>
  );
};

export default AddTransactionModal;

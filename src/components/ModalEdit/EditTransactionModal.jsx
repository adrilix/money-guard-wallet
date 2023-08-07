import useToggleModal from 'HOC/useToggleModal';

import Modal from 'components/ModalForm/ModalForm';
import React from 'react';
import ModalEdit from './ModalEdit';
import { EditBtn } from 'components/Table/TableStyled';
import { BiPencil } from 'react-icons/bi';

const EditTransactionModal = () => {
  const { isOpen, openModal, closeModal, handleKeyDown, handleBackdropClick } =
    useToggleModal();
  return (
    <div>
      <EditBtn onClick={() => openModal()}>
        <BiPencil />
      </EditBtn>

      {isOpen && (
        <Modal
          closeModal={() => closeModal()}
          handleKeyDown={handleKeyDown}
          handleBackdropClick={handleBackdropClick}
        >
          <ModalEdit closeModal={closeModal} />
        </Modal>
      )}
    </div>
  );
};

export default EditTransactionModal;

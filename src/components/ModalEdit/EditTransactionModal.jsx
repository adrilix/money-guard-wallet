import useToggleModal from 'HOC/useToggleModal';

import ButtonAdd from 'components/ModalForm/ButtonAdd';
import Modal from 'components/ModalForm/ModalForm';
import React from 'react';
import ModalEdit from './ModalEdit';

const EditTransactionModal = () => {
  const { isOpen, openModal, closeModal, handleKeyDown, handleBackdropClick } =
    useToggleModal();
  return (
    <div>
      <ButtonAdd toggleModal={() => openModal()} text={'Edit'} />
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

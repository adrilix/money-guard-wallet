import useToggleModal from 'HOC/useToggleModal';
import AddTransactionTest from 'components/ModalAddTransaction/AddTransactionTest';
import ModalEdit from 'components/ModalEdit/ModalEdit';

import ButtonAdd from 'components/ModalForm/ButtonAdd';
import Modal from 'components/ModalForm/ModalForm';
import { Balance } from 'components/Balance/Balance';
import Currency from 'components/Currency/Currency';
import { Navigation } from 'components/Navigation/Navigation';
import React from 'react';

function App() {
  const { isOpen, openModal, closeModal, handleKeyDown, handleBackdropClick } =
    useToggleModal();
  return (
    <div>
      <ButtonAdd toggleModal={() => openModal()} text={'edit modal'} />
      <div style={{ backgroundColor: 'darkgrey' }}>
        <Navigation />
        <Balance />
        <Currency />
      </div>
      {isOpen && (
        <Modal
          closeModal={() => closeModal()}
          handleKeyDown={handleKeyDown}
          handleBackdropClick={handleBackdropClick}
        >
          <ModalEdit />
        </Modal>
      )}
      <AddTransactionTest />
    </div>
  );
}

export default App;

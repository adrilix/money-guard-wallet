import ModalForm from 'components/ModalForm/ModalForm';
import React from 'react';
import useToggleModal from 'HOC/useToggleModal';
import ButtonAdd from './ButtonAdd';

function ModalAddTransaction() {
  const { isOpen, openModal, closeModal, handleKeyDown, handleBackdropClick } =
    useToggleModal();
  return (
    <div>
      <ButtonAdd toggleModal={() => openModal()} text={'qwe'} />
      {isOpen && (
        <ModalForm
          closeModal={() => closeModal()}
          handleKeyDown={handleKeyDown}
          handleBackdropClick={handleBackdropClick}
        >
          <h2>Add transaction</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatibus minima rerum quia unde voluptatum optio praesentium
            numquam! Inventore, alias! Ex cupiditate quae quod nam sit, impedit
            ullam enim dolorum voluptatum. Quod, ipsa hic sequi ex, beatae rem
            vero facere id aut ab quam minima consectetur laudantium qui, nisi
            quia tempora voluptas ipsum reiciendis quisquam eius nobis. Quidem
            assumenda alias, iusto odit excepturi molestiae delectus! Corrupti
            doloremque omnis aut, molestiae reprehenderit quasi excepturi
            asperiores consequuntur sequi enim placeat, architecto, assumenda
            porro.
          </p>
        </ModalForm>
      )}
      <ButtonAdd toggleModal={() => openModal()} text={isOpen?'qwe1':'qwe2'} />
    </div>
  );
}

export default ModalAddTransaction;

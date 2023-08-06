import React from 'react';

export default function ButtonAdd({ toggleModal, text, type }) {
  return (
    <button type={type} onClick={toggleModal} aria-label="open modal">
      {text}
    </button>
  );
}

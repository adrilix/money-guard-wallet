import React from 'react';

export default function ButtonAdd({ toggleModal, text }) {
  return (
    <button type="button" onClick={toggleModal} aria-label="open modal">
      {text}
    </button>
  );
}

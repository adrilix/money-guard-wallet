import React from 'react';
import PropTypes from 'prop-types';
import {
    ContactStyled,
    ContactDataStyled,
    ButtonDeleteStyled
} from './ContactStyled'

const Contact = ({ id, name, number, onDeleteContact }) => (
    <ContactStyled>
        <ContactDataStyled>{name}</ContactDataStyled>
        <ContactDataStyled>{number}</ContactDataStyled>
        <ButtonDeleteStyled onClick={()=>onDeleteContact(id)} type="button">
            видалити &times;
        </ButtonDeleteStyled>
    </ContactStyled>
);

Contact.propTypes = {
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    onDeleteContact: PropTypes.func.isRequired,
    id: PropTypes.string.isRequired,
};

export default Contact;

import React from 'react';
import PropTypes from 'prop-types';

import {
    FormStyled,
    LabelStyled,
    ButtonAddContactStyled,
    InputStyled,
} from './ContactFormStyled';
import { useDispatch } from 'react-redux';
import { addContactThunk } from 'redux/contactsReducers/contactsThunks';

function ContactForm(contacts) {

    const dispatch = useDispatch();
    const contactsUnpack = contacts.contacts;    

    const haldleSubmit = event => {
        event.preventDefault();
        const formData = {
            name: event.currentTarget.elements.name.value,
            number: event.currentTarget.elements.number.value,
        };
        const findName = contactsUnpack.some(
            el => el.name.toLowerCase() === formData.name.toLowerCase()
        );
        findName
            ? alert(`Контакт ${formData.name} вже існує в телефонній книзі`)
            : dispatch(addContactThunk(formData));
        event.currentTarget.reset();
    };
    return (
        <FormStyled onSubmit={haldleSubmit}>
            <h2>Додай контакт</h2>
            <LabelStyled>
                <br />
                <b>Name</b>
                <InputStyled
                    autoComplete="clear on escape"
                    type="text"
                    name="name"
                    pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Ba"
                    required
                />
            </LabelStyled>

            <LabelStyled>
                <br />
                <b>Number</b>
                <InputStyled
                    type="tel"
                    name="number"
                    pattern="\+?\d{1,4}?[\-.\s]?\(?\d{1,3}?\)?[\-.\s]?\d{1,4}[\-.\s]?\d{1,4}[\-.\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    required
                />
            </LabelStyled>

            <ButtonAddContactStyled type="submit">
                додай контакт
            </ButtonAddContactStyled>
        </FormStyled>
    );
}

ContactForm.propTypes = {
    contacts: PropTypes.arrayOf(
            PropTypes.shape
            // ({
            //     id: PropTypes.string.isRequired,
            //     name: PropTypes.string.isRequired,
            //     number: PropTypes.string.isRequired,
            // })
        ).isRequired,
    };

export default ContactForm;

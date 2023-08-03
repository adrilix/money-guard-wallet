import WithOuthRedirect from 'HOC/WithOuthRedirect';
import Contact from 'components/Contact/Contact';
import ContactForm from 'components/ContactForm/ContactForm';
import Filter from 'components/Filter/Filter';

import { LoaderSpinner } from 'components/Loader/Loader';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { findContacts } from 'redux/contactsReducers/contactsSlice';
import { deleteContactThunk, fetchContactsThunk } from 'redux/contactsReducers/contactsThunks';

const ContactsPage = () => {
  const dispatch = useDispatch();
  const userData = useSelector(state => state.user.userData);

  const contacts = useSelector(state => state.phonebook.contacts);
  const isLoading = useSelector(state => state.phonebook.isLoading);
  const error = useSelector(state => state.phonebook.error);
  const filter = useSelector(state => state.phonebook.filter);

  useEffect(() => {
    if (!userData) return;
    dispatch(fetchContactsThunk());
  }, [dispatch, userData]);

  const getFindedContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    const filteredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
    return filteredContacts;
  };

  const changeFilter = event => {
    dispatch(findContacts(event.target.value))
  };

  const handleDeleteContact = contactId => {
    dispatch(deleteContactThunk(contactId));
  };

  const showContacts = Array.isArray(contacts) && contacts.length > 0;
  const showEmptyContactsMessage =
    Array.isArray(contacts) && contacts.length === 0 && !isLoading;

  return (
    <div>
      {showEmptyContactsMessage ? (
        <p>поки що немає збережених контактів</p>
      ) : (
        <p>Список збережених контактів :</p>
      )}
      <ContactForm contacts={contacts}></ContactForm>

      <Filter value={filter} onChange={changeFilter} />
      <ul>
        {showContacts &&
          getFindedContacts().map(({ name, number, id }) => {
            return (
              <li key={id}>
                <Contact
                  onDeleteContact={handleDeleteContact}
                  name={name}
                  number={number}
                  id={id}
                ></Contact>
              </li>
            );
          })}
      </ul>
      {isLoading && <LoaderSpinner />}
      {error && <p> {error} </p>}
    </div>
  );
};

export default WithOuthRedirect(ContactsPage);

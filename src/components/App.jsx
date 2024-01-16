import React, { useEffect } from 'react';
import FormInput from './Form-input/form-input';
import ContactList from './Contact-list/contact-list';
import Filter from './Filter/filter';

import NotificationMessage from './notification-message/NotificationMessage';
import { useDispatch, useSelector } from 'react-redux';
import {
  addContact,
  filterContacts,
  removeContact,
} from 'store/ContactsToolKit/createSliceContactList';

export const App = () => {
  const {
    contacts: { phoneBook, filter },
  } = useSelector(state => state);

  const dispatch = useDispatch();

  const handleAddContact = data => {
    const isContact = phoneBook.find(el => el.number === data.number);

    if (isContact) return alert('Контакт Існує');
    dispatch(addContact(data));
  };

  useEffect(() => {
    localStorage.setItem('contactsList', JSON.stringify(phoneBook));
  }, [phoneBook]);

  const deleteContact = id => {
    dispatch(removeContact(id));
  };
  const filterContact = ({ target: { value } }) =>
    dispatch(filterContacts(value));
  const filteredContacts = phoneBook.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div
      style={{
        width: '300px',
        margin: '200px auto',
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
      }}
    >
      <h1>PhoneBook</h1>
      <FormInput sendContactData={handleAddContact} />
      <h2>Contacts</h2>
      <Filter change={filterContact} />
      {filteredContacts.length === 0 ? (
        <NotificationMessage message={`No contact ${filter}`} />
      ) : (
        <ContactList contacts={filteredContacts} handleClick={deleteContact} />
      )}
    </div>
  );
};

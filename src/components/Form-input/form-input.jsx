import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import './form-input.css';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'store/ContactsToolKit/createSliceContactList';

const FormInput = ({ sendContactData }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const {
    contacts: { phoneBook },
  } = useSelector(state => state);

  const dispatch = useDispatch();
  const handleChange = e => {
    const { value, name } = e.target;
    if (name === 'name') {
      setName(value);
    } else if (name === 'number') {
      setNumber(value);
    }
  };
  const handleSubmit = e => {
    e.preventDefault();
    const isContact = phoneBook.find(el => el.number === number);
    if (isContact) {
      setName('');
      setNumber('');
      return alert('Контакт Існує');
    }

    const data = {
      name: name,
      number: number,
      id: nanoid(),
    };
    dispatch(addContact(data));
    setName('');
    setNumber('');
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="input-container">
        <div className="input-name">
          <h3>Name</h3>
          <input
            type="text"
            name="name"
            className="input"
            value={name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="input-number">
          <h3>Number</h3>
          <input
            type="tel"
            name="number"
            className="input"
            value={number}
            onChange={handleChange}
            required
          />
        </div>
        <button className="btn" type="submit">
          Add contact
        </button>
      </div>
    </form>
  );
};

export default FormInput;

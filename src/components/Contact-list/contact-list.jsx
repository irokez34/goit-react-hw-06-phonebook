import { useDispatch, useSelector } from 'react-redux';
import './contact-list.css';
import { removeContact } from 'store/ContactsToolKit/createSliceContactList';
import NotificationMessage from 'components/notification-message/NotificationMessage';
const ContactList = () => {
  const { phoneBook } = useSelector(state => state.contacts);
  const { filter } = useSelector(state => state.filter);
  const dispatch = useDispatch();

  const deleteContact = id => {
    dispatch(removeContact(id));
  };
  const filteredContacts = phoneBook.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  const contactlist = filteredContacts.map(({ id, name, number }) => (
    <li className="item" key={id}>
      <span>{name}</span>:<span> {number}</span>
      <button type="button" onClick={() => deleteContact(id)}>
        Delete
      </button>
    </li>
  ));

  return (
    <div className="contacts">
      {filteredContacts.length === 0 ? (
        <NotificationMessage message={`No contact ${filter}`} />
      ) : (
        <ul>{contactlist}</ul>
      )}
    </div>
  );
};

export default ContactList;

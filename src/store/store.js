import { createStore } from 'redux';

const reducer = (state, action) => {
  if (action.type === 'setContacts')
    return {
      ...state,
      phoneBook: action.payload,
    };
  if (action.type === 'addContact') {
    return {
      ...state,
      phoneBook: [...state.phoneBook, action.payload],
    };
  }
  if (action.type === 'deleteContact') {
    return {
      ...state,
      phoneBook: state.phoneBook.filter(el => el.id !== action.payload),
    };
  }
  if (action.type === 'filterContacts') {
    return {
      ...state,
      filter: action.payload,
    };
  }
  return state;
};

export const store = createStore(reducer, {
  phoneBook: JSON.parse(localStorage.getItem('contactsList')) ?? [],
  filter: '',
});

import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  phoneBook: JSON.parse(localStorage.getItem('contactsList')) ?? [],
  filter: '',
};

const phoneBookSlice = createSlice({
  name: 'phoneBook',
  initialState,
  reducers: {
    addContact(state, action) {
      state.phoneBook.push(action.payload);
    },
    removeContact(state, action) {
      state.phoneBook = state.phoneBook.filter(el => el.id !== action.payload);
    },
    filterContacts(state, action) {
      state.filter = action.payload;
    },
  },
});

export const phoneBookReducer = phoneBookSlice.reducer;
export const { filterContacts, removeContact, addContact } =
  phoneBookSlice.actions;

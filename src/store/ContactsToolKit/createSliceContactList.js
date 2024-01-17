import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  phoneBook: [],
};

const phoneBookSlice = createSlice({
  name: 'phoneBook',
  initialState,
  reducers: {
    addContact: (state, action) => {
      state.phoneBook.push(action.payload);
    },

    removeContact(state, action) {
      state.phoneBook = state.phoneBook.filter(el => el.id !== action.payload);
    },
  },
});

export const phoneBookReducer = phoneBookSlice.reducer;

export const { removeContact, addContact } = phoneBookSlice.actions;

import { configureStore } from '@reduxjs/toolkit';
import {
  
  phoneBookReducer,
} from './ContactsToolKit/createSliceContactList';

import storage from 'redux-persist/lib/storage';
import persistReducer from 'redux-persist/es/persistReducer';
import persistStore from 'redux-persist/es/persistStore';
import { filterReducer } from './ContactsToolKit/createFIlterSlice';
const persistConfig = {
  key: 'contactsList',
  storage,
};
const persistedReducer = persistReducer(persistConfig, phoneBookReducer);
const reducer = {
  contacts: persistedReducer,
  filter: filterReducer,
};

export const store = configureStore({ reducer });
export const persistor = persistStore(store);

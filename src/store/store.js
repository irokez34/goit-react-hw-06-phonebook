import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { phoneBookReducer } from './ContactsToolKit/createSliceContactList';
// import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import persistReducer from 'redux-persist/es/persistReducer';
import persistStore from 'redux-persist/es/persistStore';

const reducer = combineReducers({
  contacts: phoneBookReducer,
});

const persistConfig = {
  key: 'contactsList',
  storage,
};
const persistedReducer = persistReducer(persistConfig, reducer);

export const store = configureStore({ reducer: persistedReducer });
export const persistor = persistStore(store);

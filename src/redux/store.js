import { configureStore } from '@reduxjs/toolkit';
import { createAction, createReducer } from '@reduxjs/toolkit';
// import { state } from 'fs';

export const addContact = createAction('addContact');
export const deleteContact = createAction('deleteContact');
// console.log(addContact(newContact));

const myReducer = createReducer(
  [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ],

  {
    [addContact]: (state, action) => [...state, action.payload],

    [deleteContact]: (state, action) =>
      state.filter(contact => contact.id !== action.payload),
  }
  //   { [deleteContact]: (state, action) => console.log(state) }

  //   { [addContact]: (state, action) => action.payload }
);

export const store = configureStore({
  reducer: {
    contact: myReducer,
  },
});
import { combineReducers, createAction, createReducer } from '@reduxjs/toolkit';

export const addContact = createAction('addContact');
export const deleteContact = createAction('deleteContact');
export const filterContacts = createAction('filterContacts');

export const initialContacts = [
//   { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//   { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//   { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//   { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

const initialFilter = '';

const myReducer = createReducer(initialContacts, {
  [addContact]: (state, action) => [...state, action.payload],

  [deleteContact]: (state, action) =>
    state.filter(contact => contact.id !== action.payload),
});

const myReducerFilter = createReducer(initialFilter, {
  [filterContacts]: (state, action) => (state = action.payload),
});

export const reducer = combineReducers({
  contacts: myReducer,
  filter: myReducerFilter,
});

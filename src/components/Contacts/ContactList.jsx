import css from '../Contacts/ContactList.module.css';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from 'redux/slice';
// import { deleteContact } from 'redux/reducers';

export default function ContactList() {
  const dispatch = useDispatch();
  const contactsList = useSelector(state => state.contacts);

  const filteredContacts = useSelector(state => state.filter);

  const delContact = contact => {
    dispatch(deleteContact(contact.id));
  };

  const onFilter = contactsList.filter(contact =>
    contact.name.toLocaleLowerCase().includes(filteredContacts)
  );

  return onFilter.map(contact => (
    <li key={contact.id} className={css.contact__item}>
      <p>{contact.name}:</p>
      <span>{contact.number}</span>
      <button
        type="button"
        onClick={() => delContact(contact)}
        className={css.delete__btn}
        id={contact.id}
      >
        Delete
      </button>
    </li>
  ));
}

ContactList.propType = {
  filteredContact: PropTypes.func.isRequired,
  deleteContact: PropTypes.func.isRequired,
};

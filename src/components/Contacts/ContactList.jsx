import css from '../Contacts/ContactList.module.css';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from 'redux/store';

export default function ContactList() {
  const dispatch = useDispatch();
  const contactsRedux = useSelector(state => state.contact);
  console.log(contactsRedux);
  // console.log(deleteContact)

  const delContact = contact => {
    // console.log(contact.id);
    dispatch(deleteContact(contact.id))
  };

  return contactsRedux.map(contact => (
    <li key={contact.id} className={css.contact__item}>
      <p>{contact.name}:</p>
      <span>{contact.number}</span>
      <button
        type="button"
        // onClick={delContact(contact.id)}
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

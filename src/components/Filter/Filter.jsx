import css from '../Filter/Filter.module.css';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { filterContacts } from 'redux/store';

export default function Filter() {
  const dispatch = useDispatch();
  // const contacts = useSelector(state => state.contact);


  const filtration = e => {
    console.log(e.target.value)
    dispatch(filterContacts(e.target.value))
    // contacts.filter(contact => contact.name.toLocaleLowerCase().includes(e.target.value))
    // dispatch(filterContacts(e.target.filter.value));
  };

  return (
    <div className={css.filter}>
      <label className={css.filter__title}>
        Find contacts by name
        <input
          type="text"
          name="filter"
          className={css.filter__input}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          onChange={filtration}
          // onInput={filterContacts}
        />
      </label>
    </div>
  );
}

Filter.propType = {
  handleFilterContacts: PropTypes.func.isRequired,
  filterContacts: PropTypes.func.isRequired,
};

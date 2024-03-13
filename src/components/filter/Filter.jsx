import React from 'react';
import css from './Filter.module.css';
import { useDispatch } from 'react-redux';
import { setFilter } from 'myredux/filterSlice';
import { useSelector } from 'react-redux';
import { selectContacts } from 'myredux/selectors';

const Filter = () => {
  const dispatch = useDispatch();
  const onFilterChange = evt => {
    evt.preventDefault();
    const filterValue = evt.target.value;
    dispatch(setFilter(filterValue.toLowerCase()));
  };
  const contacts = useSelector(selectContacts);
  return (
    <>
      <h2>Contacts</h2>
      {contacts.length > 0 ? (
        <div className={css.filter}>
          <label className={css.filterLabel}>
            Find contacts by Name
            <input
              className={css.filterInput}
              type="text"
              onChange={onFilterChange}
            ></input>
          </label>
        </div>
      ) : (
        <p>Your phonebook is empty! Add some contacts </p>
      )}
    </>
  );
};

export default Filter;

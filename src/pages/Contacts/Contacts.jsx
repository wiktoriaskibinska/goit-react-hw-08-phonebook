import React from 'react';
import { useEffect } from 'react';
import ContactForm from 'components/contactform/ContactForm';
import ContactList from 'components/contactlist/ContactList';
import Filter from 'components/filter/Filter';
import { useDispatch } from 'react-redux';
import { fetchContacts } from 'myredux/operations';

const Contacts = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  <>
    <ContactForm />
    <Filter />
    <ContactList />
  </>;
};
export default Contacts;

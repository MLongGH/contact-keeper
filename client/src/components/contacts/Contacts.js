import React, { Fragment, useContext } from 'react';
import ContactItem from './ContactItem';
import ContactContext from '../../context/contact/ContactContext';

const Contacts = () => {
  const contactContext = useContext(ContactContext);

  const {contacts} = contactContext;
  console.log('this is contacts');
  console.log(contacts);

  return (
    <Fragment>
      {contacts.map(contact => (
        <ContactItem key={contact.id} contact={contact}/>
      ))}
    </Fragment>
  );
};

export default Contacts;

import React, {useReducer} from 'react';
import uuid from 'uuid';
import ContactContext from './ContactContext';
import contactReducer from './ContactReducer';
import {
  ADD_CONTACT,
  DELETE_CONTACT,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_CONTACT,
  FILTER_CONTACT,
  CLEAR_FILTER
} from '../types';

const ContactState = props => {
  const initialState = {
    contacts: [
      {
        id:1,
        name: 'Jill Johnson',
        email: 'jill@gmail.com',
        phone:'111-111-1111',
        type: 'personal'
      },
      {
        id:2,
        name: 'sara watson',
        email: 'sara@gmail.com',
        phone:'222-222-2222',
        type: 'personal'
      },
      {
        id:3,
        name: 'harry white',
        email: 'harry@gmail.com',
        phone:'333-333-3333',
        type: 'professional'
      },
    ]
    };

    const [state, dispatch] = useReducer(contactReducer, initialState);

    //Add Contact

    //Delete Contact

    //Set current contact

    //clear current contact

    //Update contact

    //Filter contacts

    //Clear Filter

    return (
      <ContactContext.Provider
        value={{
          contacts:state.contacts
        }}
      >
        {props.children}
      </ContactContext.Provider>
    )
}

export default ContactState;

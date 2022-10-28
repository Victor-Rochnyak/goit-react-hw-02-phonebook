import React from 'react';

const ContactsList = ({ contacts, onDeleteContact }) => (
  <ul>
    {contacts.map(({ id, name, number }) => (
      <li key={id}>
        {name}:{number}
        <button onClick={()=> onDeleteContact(id)}>Delete</button>
      </li>
    ))}
  </ul>
);
export default ContactsList;

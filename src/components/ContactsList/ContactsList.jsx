import React from 'react';
// Стилі
import {List,Item,Button} from './ContactsList.styled'
const ContactsList = ({ contacts, onDeleteContact }) => (
  <List>
    {contacts.map(({ id, name, number }) => (
      <Item key={id}>
        {name}: {number}
        <Button onClick={()=> onDeleteContact(id)}>Delete</Button>
      </Item>
    ))}
  </List>
);
export default ContactsList;

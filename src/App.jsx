import ContactsList from 'components/ContactsList/ContactsList';
import FormBook from 'components/FormBook/FormBook';
import React, { Component } from 'react';
import { nanoid } from 'nanoid';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
  };
// добавдяємо контакт та номер телефону по сабміту
  addContact= ({name,number})=>{
    const contact ={
      id:nanoid(),
      name,
      number,
    };
    this.setState(prevState=>({
      contacts:[contact, ...prevState.contacts]
    }))
  };

  // Метод видалення контакту по ID //Працюємо лишe з map(), reduce(), filter()
  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  

  render() {
    const { contacts } = this.state;
    return (
      <>
        <h1>PhoneBook</h1>
        <FormBook onSubmit={this.addContact} />
        <h1>Contacts</h1>
        <ContactsList contacts={contacts} onDeleteContact={this.deleteContact} />
      </>
    );
  }
}
export default App;

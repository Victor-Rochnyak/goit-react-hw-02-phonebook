import ContactsList from 'components/ContactsList/ContactsList';
import FormBook from 'components/FormBook/FormBook';
import FilterContacts from './components/FilterContacts/FilterContacts';
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
    filter: '',
  };
  // добавдяємо контакт та номер телефону по сабміту
  addContact = ({ name, number }) => {
    const contact = {
      id: nanoid(),
      name,
      number,
    };

    const findContact = this.state.contacts.find(contact =>
      contact.name.toLowerCase().includes(name.toLowerCase())
    );

    findContact
      ? alert(`${name} is already in contact`)
      : this.setState(({ contacts }) => ({
          contacts: [contact, ...contacts],
        }));
  };

  // Метод видалення контакту по ID //Працюємо лишe з map(), reduce(), filter()
  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };
  // фільтр контактів
  changeFilter = event => {
    this.setState({ filter: event.currentTarget.value });
  };
  findContacts = () => {
    const { filter, contacts } = this.state;
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };
 
  render() {
    // const { contacts} = this.state;

    return (
      <>
        <h1>PhoneBook</h1>
        <FormBook onSubmit={this.addContact} />
        <h1>Contacts</h1>
        <FilterContacts filter={this.state.filter} changeFilter={this.changeFilter} />
        <ContactsList
          contacts={this.findContacts()}
          onDeleteContact={this.deleteContact}
        />
      </>
    );
  }
}
export default App;

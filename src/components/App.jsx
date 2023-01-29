
import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import Form from "./Form";
import ContactList from "./ContactList";
import Filter from "./Filter";


class App extends Component  {

 state = {
   contacts:  [
    {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
  ],
   filter: '',
  }

//    formSubmitHandler = data => {
// console.log(data);
//   }

  addContacts = (name, number) => {
    // const { contacts } = this.state;
    const newContact = {
      id: nanoid(),
      name,
      number,
    
    } 
    this.setState((prevState) => ({
      contacts: [newContact, ...prevState.contacts],
    }))
  }

  
  deleteContact = contactId => {
    this.setState(({ contacts }) => ({
      contacts: contacts.filter(contact => contact.id !== contactId),
    }));
  };
  
  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value})
  }

  getVisibleContact = () => {
    const {contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase;

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter));
    
  }

  // getCompletedContacts = () => {
  //   const { contacts } = this.state;

  //   return contacts.reduce(
  //     (contact, total) => (contact.completed ? total + 1 : total), 0);
  // }
   
  render() {
    const { filter } = this.state;
    const visibleContact = this.getVisibleContact();
    // const totalContactsCount = contacts.length;
    // const completedContactsCount = this.getCompletedContacts()

    return (
      <>
      <h2 className=''>Phonebook</h2>
        <Form onSubmit={this.addContacts} />
        
        <h2 className=''>Contacts</h2>
        <Filter value={filter} onChange={this.changeFilter} />

        <ContactList
          contacts={visibleContact}
          onDeleteContact={this.deleteContacts}
        />  
</>
) 

}

};

export default App;

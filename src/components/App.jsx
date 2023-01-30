
import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import Container from "./Container";
import Form from "./Form";
import ContactList from "./ContactList";
import Filter from "./Filter";
import css from "./App.module.css";


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

  addContacts = ({name, number}) => {
    console.log({name, number});
    const newContact = {
      id: nanoid(),
      name,
      number,
    
    } 
    this.setState((prevState) => ({
      contacts: [newContact, ...prevState.contacts],
    }))
  }

  deleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value })
  }

  getVisibleContact = () => {
    const {contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter));
    
  }

  render() {
    const { filter } = this.state;
    const visibleContact = this.getVisibleContact();
    
    return (
      <>
        <Container>
      <h2 className={css.title}>Phonebook</h2>
        <Form onSubmit={this.addContacts} />
  
        <h2 className={css.title}>Contacts</h2>
        <Filter value={filter} onChange={this.changeFilter} />

        <ContactList
          contacts={visibleContact}
          onDeleteContact={this.deleteContact}
          />
          
        </Container>  
</>
)}};

export default App;






  // getCompletedContacts = () => {
  //   const { contacts } = this.state;

  //   return contacts.reduce(
  //     (contact, total) => (contact.completed ? total + 1 : total), 0);
  // }


  // const totalContactsCount = contacts.length;
    // const completedContactsCount = this.getCompletedContacts()


  //    formSubmitHandler = data => {
   // console.log(data);
   //   }
import React, { Component } from 'react';

class Contactfrom extends Component {
  state = {
    contacts: [],
    name: '',
    number: ''
  
  }
  
  handleChange = event=> {
    // console.log(event.currentTarget);
    // console.log(event.currentTarget.name);
    // console.log(event.currentTarget.value);

    this.setState({
      [event.currentTarget.name]: event.currentTarget.value,
    })
  }
  
  handleSubmit = event => {
    event.preventDefault();
    console.log(this.state);
  }

  render() {

    return ( 
   <>
  <h2 className=''>Phonebook</h2>
<form onSubmit={this.handleSubmit}>
  <label htmlFor=''>Name
        <input
          type="text"
          name="name"
          value={this.state.name}
          onChange={this.handleChange}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          />
          </label>
          
          <label htmlFor=''>Number
          <input
            type="tel"
            name="number"
            value={this.state.number}
            onChange={this.handleChange}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required />
          </label>
        <button type='submit'>Add contact</button>
      
 </form> 
 </>
) 

}
}
export default Contactfrom;
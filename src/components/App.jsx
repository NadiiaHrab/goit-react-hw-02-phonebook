import Form from "./Form";
import React, { Component } from 'react';

class App extends Component  {

 state = {
    contacts: [],

  }
  formSubmitHandler = data => {
console.log(data);
  }
   
  render() {
    return (
      <Form onSubmit={this.formSubmitHandler} />
) 

}

};

export default App;

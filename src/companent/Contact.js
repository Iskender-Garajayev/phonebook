import React, { Component } from 'react'
import Form from './Form'
import List from './List'

export default class Contact extends Component {
  state = {
    contacts:[{name: "", phone:""},]
  }
  addContact=(datas)=>{
    const {contacts} = this.state;
    contacts.push(datas);
    this.setState({contacts})
    // console.log(datas)
  }
  render() {
    return (
      <div>
        Phone Book App
        <List contacts={this.state.contacts}/>
        <Form addContact={this.addContact}/>
      </div>
    )
  }
}

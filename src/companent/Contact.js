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
        <h3 className='title'>Phone Book App</h3>
        <List contacts={this.state.contacts}/>
        <Form addContact={this.addContact}/>
      </div>
    )
  }
}

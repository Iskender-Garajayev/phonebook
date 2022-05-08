import React, { Component } from 'react'
import '../Form.css'
import PropsTypes from 'prop-types'

export default class Form extends Component {
  static propTypes={
    addContact:PropsTypes.func
  }
  state={name: '', phone:''}
  onChange=(event)=>{
    this.setState({[event.target.name]:event.target.value})
    console.log("Last state", this.state)
  }
  sendForm=(e)=>{
    e.preventDefault();
    // console.log("for submite click")
    if(this.state.text !=='' && this.state.phone !==''){
      this.props.addContact({...this.state});
      this.setState({name:'', phone:''})
    }else{
      alert('Name of Phone not be blank !!!')
    }
  }
  render() {
    return (
      <div className='formFiled'>
        <form onSubmit={this.sendForm}>
          <input onChange={this.onChange} name='name' id='name' value={this.state.name} placeholder='Enter a name ...'></input>
          <input onChange={this.onChange} name='phone' id='phone' value={this.state.phone} placeholder='Enter a phone ...'></input>
          <button className='btn'>Save</button>
        </form>
      </div>
    )
  }
}

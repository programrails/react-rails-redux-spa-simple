import React from 'react';
import { Link } from 'react-router-dom'

// Presentational Component
export default class CompanyCreate extends React.Component {

  getInputs() {
    return { name: this.refs.name.value, price: this.refs.price.value }
  }

  render() {    
    return (    
      <form onSubmit={this.props.create} className="create">
        <input type="text" ref="name" placeholder="Name" className="input" />
        <input type="text" ref="price" placeholder="Price" className="input" />
        <button>Create</button>
      </form>
    )
  }
}
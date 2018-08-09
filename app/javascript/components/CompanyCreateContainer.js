import React from 'react';
import axios from 'axios'
import CompanyCreate from './CompanyCreate';
import store from '../redux/store';

export default class CompanyCreateContainer extends React.Component {  

  constructor(props) {
    super(props);  
    this.create = this.create.bind(this);
  }  

  create(event) {
    event.preventDefault();

    // By assigning a "child" ref to <CompanyCreate />, we
    // can use that reference to gain access to the
    // .getInputs() method. See the code for
    // <CompanyCreate /> to see how it returns a value.
    let result = this.refs.child.getInputs();

    if (result['name'] == '') {
      alert("Can't create a company with an empty name.")
      return      
    }

    axios.post('/companies.json', {company: {name: result['name'], price: result['price']}}).then(response => {
      store.dispatch({
        type: 'COMPANY_ADD',
        company: response.data
      })
    })
  }

  render() {
    return (
      <CompanyCreate create={this.create} ref="child" />
    );
  }

}


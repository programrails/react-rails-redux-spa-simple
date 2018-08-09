import React from 'react';
import { Link } from 'react-router-dom'

// Presentational Component
export default class CompanyShow extends React.Component {
  render() {    
    let company = this.props.company;
    return (
      <div>
          <div className="margin-bottom bold">Company:</div>
          <div className="margin-bottom">Name: {company.name}</div>
          <div className="margin-bottom">Price: {company.price}</div>
          <div><Link to={'/'}>Back to the Companies list</Link></div>
      </div>    
    )
  }
}
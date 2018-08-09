import React from 'react';
import { Link } from 'react-router-dom'

// Presentational Component
export default class CompanyList extends React.Component {
  
  deleteCompany(props, company_id) {
    let res = confirm("Are you sure you want to delete?");
    if (res) {
      props.deleteCompany(company_id)
    }
  }

  render() {
    let _this = this;
    return (
      <div id="table"><div className="margin-bottom">The list of companies</div>
      {this.props.companies.map(function(company) {
        return (      
            <div className="row" key={company.id}>
              <span className="cell"><Link to={'/companies/' + company.id}>{company.name}</Link></span>
              <button className="cell" onClick={_this.deleteCompany.bind(null, _this.props, company.id)} className="company-button">Delete</button>            
            </div>          
        );
      })}
      <button className="no-wrap" onClick={_this.props.companiesList.bind(null)}>Refresh companies list</button>
      </div>      
    )
  }
}

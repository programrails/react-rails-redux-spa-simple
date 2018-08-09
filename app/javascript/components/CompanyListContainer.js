import React from 'react';
import axios from 'axios'
import { connect } from 'react-redux';
import store from '../redux/store';
import CompanyList from './CompanyList';
import CompanyCreateContainer from './CompanyCreateContainer';

class CompanyListContainer extends React.Component {

  componentDidMount() {
     axios.get('/companies.json').then(response => {
        store.dispatch({
          type: 'COMPANIES_LIST',
          companies: response.data
        })
      })
  }  

  render() {
    return (
      <div>
      <CompanyCreateContainer />
      <CompanyList companies={this.props.companies} deleteCompany={this.props.deleteCompany} companiesList={this.props.companiesList} />
      </div>
      )
  }
}

const mapStateToProps = function(store) {
  return {
    companies: store.companies
  }
}

const mapDispatchToProps = function(dispatch, ownProps) {
  return {
    deleteCompany: function(company_id) {
      axios.delete('companies/' + company_id + '.json').then(response => {          
          dispatch({
            type: 'COMPANY_DELETE',
            company_id: response.data.id
          })
      })
    },
    companiesList: function() {
      axios.get('/companies.json').then(response => {
        dispatch({
          type: 'COMPANIES_LIST',
          companies: response.data
        })
      })
    }    
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CompanyListContainer);
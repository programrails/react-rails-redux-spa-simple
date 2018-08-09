import _ from 'lodash';

import initialState from '../store/initial-state';

const reducers = function(state = initialState, action) {

  switch(action.type) {

    case 'COMPANIES_LIST':
      return Object.assign({}, state, { companies: action.companies });

    case 'COMPANY_DELETE':

      // Use lodash to create a new company array without the company we want to remove
      const newCompanies = _.filter(state.companies, company => company.id != action.company_id);
      return Object.assign({}, state, { companies: newCompanies });

    case 'COMPANY_SHOW':
      return Object.assign({}, state, { company: action.company });

    case 'COMPANY_ADD':
      return Object.assign({}, state, { companies: [...state.companies, action.company] });
  }

  return state;

}

export default reducers;


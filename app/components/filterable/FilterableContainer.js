import React from 'react';
import {connect} from 'react-redux';
import Filterable from './Filterable';
import { getAvailability } from '../../actions/domain';
import { getVisibleDomains } from '../../reducers/domain';

const mapStateToProps = (state) => ({
    search: state.search,
    domains: getVisibleDomains(state)
});

const FilterableContainer = connect(
    mapStateToProps,
    { getAvailability }
)(Filterable);

export default FilterableContainer;




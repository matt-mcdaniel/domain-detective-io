import React from 'react';
import {connect} from 'react-redux';
import Filterable from './Filterable';
import { receiveDomains } from '../../actions/domain';

const mapStateToProps = (state) => ({
    search: state.search,
    domains: receiveDomains(state)
});

const FilterableContainer = connect(
    mapStateToProps,
)(Filterable);

export default FilterableContainer;




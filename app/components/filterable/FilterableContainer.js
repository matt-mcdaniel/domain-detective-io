import React from 'react';
import {connect} from 'react-redux';
import Filterable from './Filterable';
import {getAvailability} from './FilterableReducer';

const mapStateToProps = (state) => {
    return {
        recent: state.recent,
        all: state.all
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getAvailability: (str) => {
            dispatch(getAvailability(str));
        }
    }
}

const FilterableContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Filterable);

export default FilterableContainer;




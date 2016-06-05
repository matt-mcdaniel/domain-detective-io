import React from 'react';
import {connect} from 'react-redux';
import Filterable from './Filterable';
import {getAvailability} from './FilterableReducer';

const mapStateToProps = (state) => {
    return {
        search: state.search,
        all: state.all
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getAvailability: (str) => {
            dispatch(getAvailability(str));
        },
        onCheckbox: (obj) => {
            console.log(obj)
        }
    }
}

const FilterableContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Filterable);

export default FilterableContainer;




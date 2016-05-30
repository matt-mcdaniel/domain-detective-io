import React from 'react';
import {connect} from 'react-redux';
import Filterable from './Filterable';

const mapStateToProps = (state) => {
    return {
        recent: state.recent,
        all: state.all
    }
}

const mapDispatchToProps = (dispatch) => {
    return {}
}

const FilterableContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Filterable);

export default FilterableContainer;




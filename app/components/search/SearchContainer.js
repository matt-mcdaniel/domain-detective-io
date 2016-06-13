import React from 'react';
import Search from './Search';
import {connect} from 'react-redux';

const mapStateToProps = (state) => {
    return state;
}

const mapDispatchToProps = (dispatch) => {
    return {
        search: (str) => {
            dispatch({
                type: 'search',
                text: str.trim()
            });
        }
    }
}

const SearchContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Search);

export default SearchContainer;
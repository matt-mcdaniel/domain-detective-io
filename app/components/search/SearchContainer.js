import React from 'react';
import Search from './Search';
import {connect} from 'react-redux';

const mapStateToProps = (state) => {
    return {};
}

const mapDispatchToProps = (dispatch) => {
    return {
        search: (str) => {
            dispatch({
                type: 'SEARCH',
                text: str
            });
        }
    }
}

const SearchContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Search);

export default SearchContainer;
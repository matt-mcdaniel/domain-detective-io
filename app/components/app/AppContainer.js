import React from 'react';
import {connect} from 'react-redux';
import App from './App';

const mapStateToProps = (state) => {
    return {
        value: state.counter.value
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        dispatch
    }
}

const AppContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(App);

export default AppContainer;
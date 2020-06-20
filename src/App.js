import React from 'react';
import { connect } from 'react-redux';
import Grid from './Components/Grid';
import './App.css';
import { showLoader, hideLoader } from './Components/loader/loader.action';
import Loader from './Components/loader/loader';

const App = props => {
  const {
    showLoaderComponent,
    hideLoaderComponnent,
    showLoader = false
  } = props;
  return (
    <>
      <div className="App">
        <Grid showLoaderComponent={showLoaderComponent} hideLoaderComponnent={hideLoaderComponnent}/>
      </div>
      <Loader showLoader={showLoader} />
    </>
  );
}


const mapStateToProps = state => {
  const { loaderReducer: {
    showLoader = false
  } = {} } = state;
  return {
    showLoader
  }
}

const mapDispatchToProps = dispatch => {
  return {
    showLoaderComponent: () => dispatch(showLoader()),
    hideLoaderComponnent: () => dispatch(hideLoader()),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

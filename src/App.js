import React from 'react';

import './App.css';
import {connect} from 'react-redux';
import {increment, decrement,  toggleLoggedStatus} from './actions';

function App({count, isLogged, incrementCount, decrementCount, toggledLogged}) {

  return (
    <div className="App">
    <h1>Counter {count}</h1>
    <button onClick={() => {incrementCount(5)}}>+</button>
    <button onClick={() => {decrementCount()}}>-</button><br></br>
    {isLogged && (<p>Logged in</p>)}
    <button onClick={() => {toggledLogged()}}>Toggle logged in state</button>
   
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    count: state.counter,
    isLogged: state.isLogged
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    incrementCount: (num) => {dispatch(increment(num))},
    decrementCount: () => {dispatch(decrement())},
    toggledLogged: () => {dispatch(toggleLoggedStatus())}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

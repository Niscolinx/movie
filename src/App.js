import React, { Component } from 'react';
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className='header'>
       <h1>The movie search</h1>
       <input type='text' className='header__input' placeholder='please search your movies here' />
      </div>
    );
  }
}

export default App;

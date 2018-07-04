import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Blog from './Blog/Blog';
import Counter from './Counter/Counter';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Counter />
        <BrowserRouter>
          <Blog />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;

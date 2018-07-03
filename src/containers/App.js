import React, { Component } from 'react';
import logo from '../assets/logo.svg';
import './App.css';
import Persons from '../components/Persons/Persons';

class App extends Component {
  state = {
    persons: [
      { id: 1, name: 'John' },
      { id: 2, name: 'David' },
      { id: 3, name: 'Mark' }
    ]
  };

  deletePersonHandler = (index) => {
    const persons = [...this.state.persons];
    persons.splice(index, 1);
    this.setState({persons: persons});
  };

  nameChangeHandler = (event, id) => {
    const index = this.state.persons.findIndex(p => {
      return p.id === id;
    });
    const person = {...this.state.persons[index]};
    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[index] = person;
    this.setState({persons: persons});
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div>
          <Persons
            persons={this.state.persons}
            onPersonClick={this.deletePersonHandler}
            onNameChange={this.nameChangeHandler} />
        </div>
      </div>
    );
  }
}

export default App;

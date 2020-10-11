import React, { Component } from 'react';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField : ""
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then ( response => response.json() )
    .then ( users => this.setState ( { monsters: users } ));
  }

    handleChange = ( e ) => {
    console.log ("event:", e.target.value );
    this.setState ( { searchField : e.target.value },
      () => console.log ("search 1:", this.state.searchField )
    );
    console.log ("search 0:", this.state.searchField );
  }

  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter ( monster => 
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );
    return (
      <div className="App">
       <h1>Monters Rolodex</h1>
        <SearchBox placeholder="Search monsters"
           eventHandler = { this.handleChange }
        />
        <CardList monsters={filteredMonsters}/>
      </div>
    );
  }
}

export default App;

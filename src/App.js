import React, { Component } from 'react';
import './App.css';
import Grocery from './Grocery';
import GroceryList from './GroceryList';

class App extends Component {
  render() {
    return (
        <GroceryList
          groceryList={[
            {
              id: 1,
              name: 'apples',
              quantity: '7',
              notes: 'an apple a day keeps the doctor away'
            },
            {
              id: 2,
              name: 'oranges',
              quantity: '1',
              notes: 'vitamin C!'
            }
          ]}
          onClear={this.onClearMock}
        />

    );
  }
}

export default App;

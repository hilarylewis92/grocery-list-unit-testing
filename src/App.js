import React, { Component } from 'react';
import './App.css';
import Grocery from './Grocery';

class App extends Component {
  render() {
    return (
      <Grocery
        name={'bananas'}
        starred={false}
        purchased={false}
        quantity={'17 bunches'}
        notes={'Bananas could help you to feel happier as they contain tryptophan, a type of protein that the body converts into serotoin, known to promote relaxation and improve modde'}
        onPurchase={this.onPurchaseMock}
        onStar={this.onStarMock}
        onDelete={this.onDeleteMock}
      />
    );
  }
}

export default App;

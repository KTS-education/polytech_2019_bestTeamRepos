import React, { Component } from 'react';
// import Loader from '@components/Loader';
import NoResults from '@components/NoResults';
import products from './mock.js';
import List from './List';
import './Container.css';

export class Container extends Component {
  render() {
    if (products.length) {
      return (
        <div>
          <List products={products} />
        </div>
      );
    }
    return (
      <NoResults text='Кажется, ты не любишь подарки' />
    );
  }
}

export default Container;

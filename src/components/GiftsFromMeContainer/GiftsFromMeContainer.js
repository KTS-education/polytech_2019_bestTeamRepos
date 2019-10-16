import React, { Component } from 'react';
// import Loader from '@components/Loader';
import NoResults from '@components/NoResults';
import products from './mock.js';
import ProductsList from './ProductsList';
import './GiftsFromMeContainer.css';

export class GiftsFromMeContainer extends Component {
    render() {
        if (products.length) {
          return (
            <div>
              <ProductsList products={products} />
            </div>
          );
        }
        return (
          <NoResults text='Кажется, ты не любишь подарки' />
        );
      }
}

export default GiftsFromMeContainer;

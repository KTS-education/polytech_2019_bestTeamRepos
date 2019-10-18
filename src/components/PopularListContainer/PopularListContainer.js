import React from 'react';
import Loader from '@components/Loader';
import products from './mock.js';
import SectionName from './SectionName';
import List from './List';
import './PopularListContainer.css';

class PopularListContainer extends React.Component {
  render() {
    if (products.length) {
      return (
        <div>
          <SectionName title="Популярное" />
          <List products={products} />
        </div>
      );
    }
    return (
      <Loader />
    );
  }
}

export default PopularListContainer;

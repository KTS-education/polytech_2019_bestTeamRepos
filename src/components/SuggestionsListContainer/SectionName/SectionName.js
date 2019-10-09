import React from 'react';
import './SectionName.css';
import popularEmoji from '../../../img/popular.png';

class SectionName extends React.Component {
  render() {
    return (
      <h2 className="listTitle">
Популярное
        <img className="emoji" src={popularEmoji} alt="emoji fo popular products" />
      </h2>
    );
  }
}

export default SectionName;

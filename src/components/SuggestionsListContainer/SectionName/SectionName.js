import React from 'react';
import './SectionName.css';
import PropTypes from 'prop-types';
import popularEmoji from '../../../img/popular.png';

class SectionName extends React.Component {

  static propTypes = {
    title: PropTypes.string.isRequired
  };

  render() {
    const { title } = this.props.title;

    return (
      <h2 className="listTitle">
        { title }
        <img className="emoji" src={ popularEmoji } alt="emoji fo popular products" />
      </h2>
    );
  }
}

export default SectionName;

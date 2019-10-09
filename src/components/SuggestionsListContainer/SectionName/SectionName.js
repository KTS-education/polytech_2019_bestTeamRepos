import React from 'react';
import './SectionName.css';
import PropTypes from 'prop-types';
import popularEmoji from '../../../img/popular.png';

class SectionName extends React.Component {

  static propTypes = {
    title: PropTypes.string.isRequired
  };

  render() {
    const { title } = this.props;

    return (
      <h2 className="list-title">
        { title }
        <img className="emoji" src={ popularEmoji } alt="emoji fo popular products" />
      </h2>
    );
  }
}

export default SectionName;

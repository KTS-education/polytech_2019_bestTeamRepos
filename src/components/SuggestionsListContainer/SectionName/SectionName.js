import React from 'react';
import PropTypes from 'prop-types';
import popularEmoji from '@img/popular.png';
import './SectionName.css';

class SectionName extends React.Component {

  static propTypes = {
    title: PropTypes.string.isRequired
  };

  render() {
    const { title } = this.props;

    return (
      <h2 className="list-title">
        <span>{title}</span>
        <img className="emoji" src={popularEmoji} alt="emoji fo popular products" />
      </h2>
    );
  }
}

export default SectionName;

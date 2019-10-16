import React from 'react';
import PropTypes from 'prop-types';
import noResults from '@img/noResults.png';
import './NoResults.css';

class NoResults extends React.Component {

  static propTypes = {
        text: PropTypes.string.isRequired
  }

  render() {
    const {text} = this.props;

    return (
      <div className="no-results-container">
        <img className="no-results-container__emoji" src={noResults} alt="Sad emoji" />
        <p>{text}</p>
      </div>
    );
  }
}

export default NoResults;

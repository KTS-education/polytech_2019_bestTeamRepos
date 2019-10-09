import React from 'react';
import './NoResults.css';
import PropTypes from 'prop-types';
import noResults from '../../img/noResults.png';

class NoResults extends React.Component {

  static propTypes = {
        noResults: PropTypes.String.isRequired
  }

  render() {
    const { text } = this.props;

    return (
      <div>
        <img className="emoji" src={noResults} alt="Sad emoji" />
        <p>{ text }</p>
      </div>
    );
  }
}

export default NoResults;

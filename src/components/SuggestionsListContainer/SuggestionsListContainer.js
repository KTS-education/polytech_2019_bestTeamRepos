import React from 'react';
import Loader from '@components/Loader';
import suggestions from './mock.js';
import SectionName from './SectionName';
import SuggestionsList from './SuggestionsList';
import './SuggestionsListContainer.css';

class SuggestionsListContainer extends React.Component {
  render() {
    if (suggestions.length) {
      return (
        <div>
          <SectionName title="Популярное" />
          <SuggestionsList suggestions={suggestions} />
        </div>
      );
    }
    return (
      <Loader />
    );
  }
}

export default SuggestionsListContainer;

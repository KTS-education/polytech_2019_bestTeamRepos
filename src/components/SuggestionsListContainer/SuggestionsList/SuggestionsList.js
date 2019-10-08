import React from 'react';
import SuggestionsListItem from './SuggestionsListItem';
import './SuggestionsList.css';
import PropTypes from 'prop-types';

// Презентационный компонент, который умеет только отображать данные
class SuggestionsList extends React.Component {
    
    static propTypes = {
        suggestions: PropTypes.array.isRequired
    };

    render() {
        const suggestions = this.props.suggestions;

        return (
            <ul className="suggestionsList">
                {  
                   suggestions.map(suggestion => {
                        return <SuggestionsListItem key={suggestion.product_id} suggestion={suggestion}/>
                    })
                }
            </ul>
        )
    }
}

export default SuggestionsList;
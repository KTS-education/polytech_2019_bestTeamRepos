import React from 'react';
import PropTypes from 'prop-types';
import SuggestionsListItem from './SuggestionsListItem';
import './SuggestionsList.css';

// Презентационный компонент, который умеет только отображать данные
class SuggestionsList extends React.Component {
    
    static propTypes = {
        suggestions: PropTypes.array.isRequired
    };

    render() {
        const suggestions = this.props.suggestions;

        return (
            <ul className="suggestions-list">
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
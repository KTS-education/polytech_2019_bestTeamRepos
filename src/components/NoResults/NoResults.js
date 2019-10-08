import React from 'react';
import './NoResults.css';
import noResults from '../../../src/img/noResults.png';

class NoResults extends React.Component {
    render() {
        const { text } = this.props;

        return (
            <div>
                <img className="emoji" src = { noResults } />
                <p>{ text }</p>
            </div>
        )
    }
}

export default NoResults;
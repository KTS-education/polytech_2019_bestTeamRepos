import React from 'react';
import './NoResults.css';
// import from '../../src/img/noResults.png';

class NoResults extends React.Component {
    render() {
        const { text } = this.props;

        return (
            <div>
                <img  />
                <p>{ text }</p>
            </div>
        )
    }
}

export default NoResults;
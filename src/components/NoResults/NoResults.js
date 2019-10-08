import React from 'react';
import './NoResults.css';

class NoResults extends React.Component {
    render() {
        const { text } = this.props;

        return (
            <p>{ text }</p>
        )
    }
}

export default NoResults;
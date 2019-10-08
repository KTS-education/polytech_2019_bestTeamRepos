import React from 'react';
import './Loader.css';

class Loader extends React.Component {
    render() {
        return (
            <div className="loaderContainer"><span className='oval'></span></div>
        );
    }
}

export default Loader;
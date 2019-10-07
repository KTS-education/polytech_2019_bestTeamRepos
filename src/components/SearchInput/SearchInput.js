import React from 'react';
import './SearchInput.css';
// import PropTypes from 'prop-types';

class SearchInput extends React.Component{

    static propTypes = {

      };


    static defaultProps = {

      };

    render(){
      



        return(
          <div className="searchContainer">
              <input type="text" className="inpt"></input>
          </div>
        )
    };

}

export default SearchInput;
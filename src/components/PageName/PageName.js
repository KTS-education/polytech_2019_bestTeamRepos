import React from 'react';
import './PageName.css';
import PropTypes from 'prop-types';
import logo from '../../img/logo.svg';

class PageName extends React.Component{

    static propTypes = {
        name: PropTypes.string,
        logoPath: PropTypes.string
      };


    static defaultProps = {
        name: 'default name',
        logoPath: logo
      };

    render(){
      const { name, logoPath } = this.props;



        return(
          <div className="nameContainer">
              <h1>{ name }</h1>
              <img
                src={ logoPath }
                className="Page-logo"
                alt="logo"
              />
          </div>
        )
    };

}

export default PageName;
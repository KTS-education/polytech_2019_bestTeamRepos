import React from 'react';
import './Header.css';
import YourAccount from './YourAccount';
import Friends from './Friends';
// import PropTypes from 'prop-types';
// import logo from '../../img/logo.svg';

class Header extends React.Component{

    static propTypes = {

      };


    static defaultProps = {

      };

    render(){



        return(
          <div className="headerContainer">
            <YourAccount name="Антон" surname="Чащин"/>
            <Friends />
          </div>
        )
    };

}

export default Header;
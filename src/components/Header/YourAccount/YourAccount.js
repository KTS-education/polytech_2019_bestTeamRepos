import React from 'react';
import './YourAccount.css';
import PropTypes from 'prop-types';
import logo from '../../../img/accounts/your/account-photo.png';

class YourAccount extends React.Component{

    static propTypes = {
      name: (PropTypes.string).isRequired,
      surname: (PropTypes.string).isRequired,
      logoPath: PropTypes.string
      };
      
      static defaultProps = {
        logoPath: logo
      };

    render(){
      const { name, surname, logoPath } = this.props;


        return(
          <div className="Container">
            <img
                src={ logoPath }
                className="Page-logo"
                alt="logo"
              />
            <a href="" className="text">
            {name} {surname}
          </a>
          </div>
        )
    };

}

export default YourAccount;
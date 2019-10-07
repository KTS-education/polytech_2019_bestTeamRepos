import React from 'react';
import './Main.css';
import Header from '../../components/Header';
import SearchInput from '../../components/SearchInput';
import PageName from '../../components/PageName';
import logo from '../../img/wishlist.png';
import PropTypes from 'prop-types';

class Main extends React.Component{

    static propTypes = {
        logoPath: PropTypes.string
      };


    static defaultProps = {
        logoPath: logo
      };

    render(){
      const { logoPath } = this.props;
        
        return(
            <div className="container">
                <Header />
                <PageName name="Wishlist" logoPath={ logoPath } />
                <SearchInput  />
            </div>
        )
    };

}

export default Main;
import React from 'react';
import './Main.css';
import MainButton from '../../components/MainButton';
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
                <PageName name="Wishlist" logoPath={ logoPath } />
                <MainButton textButton="Перейти" />
                <SearchInput />
            </div>
        )
    };

}

export default Main;
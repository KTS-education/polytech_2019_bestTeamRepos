import React from 'react';
import './FriendImgList.css';
import PropTypes from 'prop-types';

class FriendImgList extends React.Component{

    static propTypes = {
        friend1:PropTypes.string,
        friend2:PropTypes.string,
        friend3:PropTypes.string
      };



    render(){
        const { friend1, friend2, friend3 } = this.props;


        return(
          <div className="Container">
          <ul>
            <li>
                <img
                    src={ friend1 }
                    className="FriendImg"
                    alt="FriendImg1"
                  />
            </li>


            <li>
                <img
                    src={ friend2 }
                    className="FriendImg"
                    alt="FriendImg2"
                  />
            </li>


            <li>
                <img
                    src={ friend3 }
                    className="FriendImg"
                    alt="FriendImg3"
                  />
            </li>
          </ul>
          </div>
        )
    };

}

export default FriendImgList;
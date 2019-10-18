import React from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom"
import SecondaryButton from '@components/SecondaryButton';
import MainButton from '@components/MainButton';
import './StatusButtons.css';

class StatusButtons extends React.Component {
    constructor(props) {
        super(props);
      }
    static propTypes = {
        booked: PropTypes.bool
    }

    static defaultProps = {
        booked: null
      };

    render() {
        if (this.props.location.pathname === "/") {
            return (
                <div>
                    <MainButton className="item__button" children={<span>Добавить в избранное</span>} />
                </div>
            )
        }
        else if (this.props.location.pathname === "/mypage") {
            const product = this.props.product;
            console.log(product);
            if (product.hasOwnProperty('booked') && product.booked) {
                return (
                    <div>
                        <SecondaryButton children={<span>Удалить</span>} />
                    </div>
                )
            } 
        }
            // else {
        //         return (
        //             <div>
        //                 <SecondaryButton children={<span>Удалить</span>} />
        //                 <span>booked</span>
        //             </div>
        //         )
        //     }
        // }
        // else if (this.props.location.pathname === "/mypage/what-i-want") {
        //     return (
        //         <div>
        //             <SecondaryButton />
        //             <span>Who'll gift</span>
        //         </div>
        //     )
        // }
        // else if (this.props.location.pathname === "/myfriendspage") {
        //     return (
        //         <div>

        //         </div>
        //     )
        // }
        // else {
        //     // here /myfriendspage/what-friend-want
        // }
    }
}

export default withRouter(StatusButtons);
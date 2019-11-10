import React from "react";

import Friend from "./Friend";

import { default as connectVK } from "@vkontakte/vk-connect";

import NoResults from "@components/NoResults";
import MainButton from "@components/MainButton";
import buttonTypes from "@config/buttonTypes";

import { connect } from "react-redux";

import styles from "./FriendsContainer.module.scss";

class FriendsContainer extends React.Component {
  state = {
    items: [],
    visible: 5,
    noResults: false,
    isLoading: false,
    token: null,
    id: null
  };

  // async getID() {
  //   connectVK
  //     .sendPromise("VKWebAppGetUserInfo")
  //     .then(response => {
  //       this.setState({ id: response.id });
  //     })
  //     .catch(error => {
  //       console.log(error);
  //     });
  // }

  // async getToken() {
  //   if (this.state.token === null) {
  //     connectVK
  //       .sendPromise("VKWebAppGetAuthToken", {
  //         app_id: 7186760,
  //         scope: "friends,status"
  //       })
  //       .then(response => {
  //         this.setState({ token: response.access_token });
  //       })
  //       .catch(error => {
  //         console.log(error);
  //       });
  //   }
  // }

  // async fetchData() {
  //   await this.getID();
  //   await this.getToken();
  //   await connectVK
  //     .sendPromise("VKWebAppCallAPIMethod", {
  //       method: "friends.get",
  //       request_id: "friends_test",
  //       params: {
  //         user_id: this.state.id,
  //         order: "name",
  //         fields: "city",
  //         v: "5.103",
  //         access_token: this.state.token
  //       }
  //     })
  //     .then(response => {
  //       console.log(response);
  //       this.setState({ items: response.items });
  //       console.log(this.state);
  //     })
  //     .catch(error => {
  //       console.log(error.error_data);
  //     });
  // }

  // componentDidMount() {
  //   this.fetchData();
  // }

  async fetchFriends() {
    await connectVK
      .sendPromise("VKWebAppGetUserInfo")
      .then(response => {
        this.setState({ id: response.id });
      })
      .catch(error => {
        console.log(error.error_data);
      });

    await connectVK
      .sendPromise("VKWebAppGetAuthToken", {
        app_id: 7186760,
        scope: "friends,status"
      })
      .then(response => {
        ///////////////////////////////
        console.log(response);
        this.setState({ token: response.access_token });
      })
      .catch(error => {
        console.log(error.error_data);
      });

    connectVK
      .sendPromise("VKWebAppCallAPIMethod", {
        method: "friends.get",
        request_id: "friends_test",
        params: {
          user_id: this.state.id,
          order: "name",
          fields: "city",
          v: "5.103",
          access_token: this.state.token
        }
      })
      .then(response => {
        ///////////////////////////////
        console.log(response);
        this.setState({ items: response.response.items });
      })
      .catch(error => {
        console.log(error.error_data);
      });
  }

  componentDidMount() {
    this.fetchFriends();
  }

  loadmore = () => {
    this.setState(old => {
      return { visible: old.visible + 5 };
    });
  };

  render() {
    const { friendsList } = this.props.friendsList;

    const hasMore = this.state.visible < friendsList.length;
    if (friendsList.length) {
      return (
        <div className={styles["friends-list-container"]}>
          {friendsList.slice(0, this.state.visible).map(friend => {
            return <Friend accountInfo={friend} key={friend.id} />;
          })}
          {hasMore && (
            <MainButton
              className={styles["friends-list-container__more-btn"]}
              onClick={this.loadmore}
              type={buttonTypes.secondary}
            >
              Показать ещё
            </MainButton>
          )}
        </div>
      );
    }
  }
}

const mapStateToProps = ({ friendsList }) => {
  return {
    friendsList
  };
};

export default connect(mapStateToProps)(FriendsContainer);

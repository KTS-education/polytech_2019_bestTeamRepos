import React from "react";
import Loader from "@components/Loader";
import List from "@components/List";
import NoResults from "@components/NoResults";
import { connect } from "react-redux";
import { isArray } from "util";

class PopularGiftsContainer extends React.Component {
  render() {
    const { searchList, isLoading, error } = this.props;

    if (error) {
      return <div>{error}</div>;
    }

    if (isLoading) {
      return <Loader />;
    }

    if (isArray(searchList) && searchList.length) {
      return <List products={searchList} />;
    }

    if (isArray(searchList) && !searchList.length)
      return <NoResults children="Ничего не найдено" />;

    return null;
  }
}

const mapStateToProps = ({ searchList }) => {
  return {
    ...searchList
  };
};

export default connect(mapStateToProps)(PopularGiftsContainer);

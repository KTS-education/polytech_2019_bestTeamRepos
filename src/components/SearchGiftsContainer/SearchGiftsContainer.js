import React from "react";
import { isArray } from "util";

import { connect } from "react-redux";
import { deleteSearchResults } from "@actions/updateSearchResults";

import Loader from "@components/Loader";
import List from "@components/List";
import NoResults from "@components/NoResults";

class SearchGiftsContainer extends React.Component {
  componentWillUnmount() {
    this.props.deleteSearchResults();
  }

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

const mapDispatchToProps = dispatch => {
  return {
    deleteSearchResults: () => dispatch(deleteSearchResults())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchGiftsContainer);

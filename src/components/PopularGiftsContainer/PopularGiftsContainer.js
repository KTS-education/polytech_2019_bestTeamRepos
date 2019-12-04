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
    } else if (isLoading) {
      return <Loader />;
    } else {
      if (isArray(searchList) && searchList.length) {
        return <List products={searchList} />;
      } else if (isArray(searchList) && !searchList.length)
        return <NoResults children="Ничего не найдено" />;
      else return null;
    }
  }
}

const mapStateToProps = ({ searchList, isLoading, error }) => {
  return {
    ...searchList,
    ...isLoading,
    ...error
  };
};

export default connect(mapStateToProps)(PopularGiftsContainer);

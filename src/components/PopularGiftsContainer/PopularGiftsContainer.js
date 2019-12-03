import React from "react";
import Loader from "@components/Loader";
import List from "@components/List";
import NoResults from "@components/NoResults";
import { connect } from "react-redux";
import { isNull, isArray } from "util";

class PopularGiftsContainer extends React.Component {
  render() {
    const { searchList, isLoading, error } = this.props;
    if (isNull(searchList)) {
      return null;
    } else if (isLoading) {
      return <Loader />;
    } else if (isArray(searchList) && searchList.length) {
      return <List products={searchList} />;
    } else if (isArray(searchList) && !searchList.length) {
      return <NoResults children="Ничего не найдено" />;
    } else if (error) {
      console.log(error);
    }
  }
}

const mapStateToProps = ({ searchList }) => {
  return {
    ...searchList
  };
};

export default connect(mapStateToProps)(PopularGiftsContainer);

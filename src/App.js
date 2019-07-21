import React, { Component } from "react";
import { connect } from "react-redux";
import NavBar from "./components/NavBar/NavBar";
import SearchBar from "./components/SearchBar/SearchBar";
import ResultsHeader from "./components/ResultsHeader/ResultsHeader";
import BusinessList from "./components/BusinessList/BusinessList";
import Pagination from "./components/Pagination/Pagination";
import Yelp from "./util/Yelp";
import { setSearchResults } from "./actions";
import "./App.css";

require("dotenv").config();

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.searchYelp = this.searchYelp.bind(this);
  }

  searchYelp(term, location, sortBy, offset) {
    Yelp.search(term, location, sortBy, offset).then(businessData => {
      if (businessData) {
        this.props.setSearchResults(
          businessData.total,
          businessData.businessList,
          offset,
          true
        );
      } else {
        this.props.setSearchResults(0, [], 0, false);
      }
    });
  }

  render() {
    const { businesses, offset } = this.props;
    return (
      <React.Fragment>
        <NavBar />
        <SearchBar searchYelp={this.searchYelp} />
        <ResultsHeader pageIndexHigh={(offset || 0) + businesses.length} />
        <BusinessList businesses={businesses} />
        <Pagination perPage={21} searchYelp={this.searchYelp} offset={offset} />
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  total: state.total,
  businesses: state.businesses,
  offset: state.offset,
  searchSuccess: state.searchSuccess
});

const mapDispatch = dispatch => ({
  setSearchResults: (total, businesses, offset, searchSuccess) =>
    dispatch(setSearchResults(total, businesses, offset, searchSuccess))
});

export default connect(
  mapStateToProps,
  mapDispatch
)(App);

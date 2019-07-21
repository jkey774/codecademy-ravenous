import React, { Component } from "react";
import "./SearchBar.scss";
import { connect } from "react-redux";

import {
  setSearchTerm,
  setSearchLocation,
  setSearchSortBy
} from "../../actions";

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: "",
      location: ""
    };
    this.sortByOptions = {
      "Best Match": "best_match",
      "Highest Rated": "rating",
      "Most Reviewed": "review_count"
    };
    this.errorMessages = {
      termError: "Please enter a search term.",
      locationError: "Please enter a location"
    };
    this.handleSearch = this.handleSearch.bind(this);
  }

  handleTermChange = evt => {
    this.setState({
      term: evt.target.value
    });
  };

  handleLocationChange = evt => {
    this.setState({
      location: evt.target.value
    });
  };

  handleSortByChange(sortByOption) {
    this.props.setSearchSortBy(sortByOption);
    if (this.props.searchSuccess && this.validateSearch()) {
      this.props.searchYelp(
        this.state.term,
        this.state.location,
        sortByOption,
        0
      );
    }
  }

  handleSearch(event) {
    event.preventDefault();
    const isValid = this.validateSearch();
    if (isValid) {
      this.props.searchYelp(
        this.state.term,
        this.state.location,
        this.props.sortBy
      );
      this.props.setSearchTerm(this.state.term);
      this.props.setSearchLocation(this.state.location);
    }
  }

  validateSearch() {
    let termError = "";
    let locationError = "";
    if (this.state.term === "") {
      termError = this.errorMessages.termError;
    }
    if (this.state.location === "") {
      locationError = this.errorMessages.locationError;
    }
    this.setState({ termError, locationError });
    if (termError || locationError) {
      return false;
    }
    return true;
  }

  getSortByClass(sortByOption) {
    let classes = "btn btn-secondary";
    classes += this.props.sortBy === sortByOption ? " active" : "";
    return classes;
  }

  renderSortByOptions() {
    return Object.keys(this.sortByOptions).map(sortByOption => {
      let sortByOptionValue = this.sortByOptions[sortByOption];
      return (
        <li
          key={sortByOptionValue}
          className={this.getSortByClass(sortByOptionValue)}
          onClick={this.handleSortByChange.bind(this, sortByOptionValue)}
        >
          {sortByOption}
        </li>
      );
    });
  }
  renderError(errorMessage) {
    if (errorMessage) {
      return <div className="error-label">{errorMessage}</div>;
    }
    return null;
  }

  render() {
    return (
      <div className="SearchBar">
        <div>
          <ul
            className="SearchBar-sort-options"
            role="group"
            aria-label="sort by"
          >
            {this.renderSortByOptions()}
          </ul>
          <form onSubmit={this.handleSearch}>
            <div className="SearchBar-fields">
              <div>
                <input
                  value={this.state.term}
                  onChange={this.handleTermChange}
                  placeholder="Search Businesses"
                />
                {this.renderError(this.state.termError)}
              </div>
              <div>
                <input
                  value={this.state.location}
                  onChange={this.handleLocationChange}
                  placeholder="Where?"
                />
                {this.renderError(this.state.locationError)}
              </div>
            </div>
            <div className="SearchBar-submit">
              <button type="submit" className="btn btn-primary btn-lg">
                Let's Go
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  sortBy: state.sortBy,
  searchSuccess: state.searchSuccess
});

const mapDispatch = dispatch => ({
  setSearchTerm: term => dispatch(setSearchTerm(term)),
  setSearchLocation: location => dispatch(setSearchLocation(location)),
  setSearchSortBy: sortBy => dispatch(setSearchSortBy(sortBy))
});

export default connect(
  mapStateToProps,
  mapDispatch
)(SearchBar);

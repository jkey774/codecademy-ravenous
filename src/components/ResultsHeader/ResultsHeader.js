import React from "react";
import "./ResultsHeader.scss";

import { connect } from "react-redux";

const searchTermPrefix = sortByValue =>
  sortByValue === "rating" ? "Best " : "";

const ResultsHeader = ({
  total,
  term,
  sortBy,
  location,
  offset,
  pageIndexHigh,
  searchSuccess
}) => {
  if (searchSuccess === true) {
    return (
      <div className="ResultsHeader">
        <div className="container">
          <div>
            <h1>
              <span>{`${searchTermPrefix(sortBy)} ${term}`}</span>
              {` in ${location}`}
            </h1>
            <p className="results-count">
              Showing {(offset || 0) + 1}-{pageIndexHigh} of {total}
            </p>
          </div>
        </div>
      </div>
    );
  } else if (searchSuccess === false) {
    return (
      <div className="ResultsHeader">
        <div className="container">
          <div>
            <h1>
              <span>No results for {term}</span> in {location}
            </h1>
          </div>
        </div>
      </div>
    );
  }
  return null;
};

const mapStateToProps = state => ({
  searchSuccess: state.searchSuccess,
  total: state.total,
  offset: state.offset,
  term: state.term,
  location: state.location,
  sortBy: state.sortBy
});

export default connect(mapStateToProps)(ResultsHeader);

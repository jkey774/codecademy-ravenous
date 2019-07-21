import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import PageCount from "./PageCount";
import ReactPaginate from "react-paginate";
import "./Pagination.scss";

class Pagination extends Component {
  static propTypes = {
    perPage: PropTypes.number.isRequired
  };
  constructor(props) {
    super(props);
    this.state = {};
    this.handlePageClick = this.handlePageClick.bind(this);
  }

  handlePageClick(data) {
    let selected = data.selected;
    let offset = Math.ceil(selected * this.props.perPage);
    this.setState({ offset: offset, selected: selected }, () => {
      window.scrollTo(0, 469);
      this.props.searchYelp(
        this.props.term,
        this.props.location,
        this.props.sortBy,
        offset
      );
    });
  }

  render() {
    const { total, perPage, offset } = this.props;
    let { selected } = this.state;

    if (total) {
      let forcePageObj = {};
      if (!offset) {
        forcePageObj["forcePage"] = 0;
      }
      return (
        <div className="Pagination container">
          <PageCount page={selected ? selected + 1 : 1} total={total} />
          <ReactPaginate
            previousLabel={"«"}
            nextLabel={"»"}
            breakLabel={"..."}
            breakClassName={"break-me"}
            pageCount={Math.ceil(total / perPage)}
            marginPagesDisplayed={1}
            pageRangeDisplayed={2}
            onPageChange={this.handlePageClick}
            containerClassName={"Pagination-buttons"}
            hrefBuilder={() => "#"}
            activeClassName={"active"}
            {...forcePageObj}
          />
        </div>
      );
    }
    return null;
  }
}

const mapStateToProps = state => ({
  term: state.term,
  location: state.location,
  sortBy: state.sortBy,
  total: state.total
});

export default connect(mapStateToProps)(Pagination);

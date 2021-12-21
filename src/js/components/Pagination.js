import React from "react";
import PropTypes from "prop-types";
import _ from "lodash";

import "../../assets/sass/pagination.scss";

const Pagination = (props) => {
  const { pageNum, currentPage, onPageChange } = props;

  if (pageNum === 1) return null;

  const pages = _.range(1, pageNum + 1);

  return (
    <div className="row justify-content-center align-content-center">
      <div className="col-4 mt-3">
        <nav>
          <ul className="pagination justify-content-center pagination-sm">
            {pages.map((page) => (
              <li key={page} className={page === currentPage ? "page-item active" : "page-item"}>
                <a className="page-link" href="#!" onClick={() => onPageChange(page)} tabindex="0" alt={page}>
                  {page}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};

Pagination.prototype = {
  pageNum: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
};

export default Pagination;

import React from "react";

const PageCount = ({ total, page }) => {
  if (total) {
    const currentPage = page;
    const maxPage = Math.ceil(total / 21);
    return (
      <div className="PageCount">
        Page {currentPage} of {maxPage}
      </div>
    );
  }
  return null;
};

export default PageCount;

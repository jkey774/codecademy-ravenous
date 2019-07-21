import React from "react";
import "./BusinessList.scss";
import Business from "../Business/Business";

const BusinessList = ({ businesses }) => (
  <div className="BusinessList container">
    <div className="card-deck">
      {businesses.map(business => {
        return <Business key={business.id} business={business} />;
      })}
    </div>
  </div>
);

export default BusinessList;

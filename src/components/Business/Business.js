import React from "react";
import "./Business.scss";

// Start Stateless Functional Component
// add props as a parameter
// remove 'this'

const Business = ({ business }) => {
  const bgStyle = {
    backgroundImage: `url(${business.imageSrc})`
  };
  return (
    <div className="Business">
      <div className="Business-img" style={bgStyle} />
      <div className="Business-address">
        <h2>{business.name}</h2>
        <p>{business.address}</p>
        <p>
          {business.city}, {business.state}
        </p>
        <p>{business.zipCode}</p>
      </div>
      <div className="Business-category">
        <p>{business.category}</p>
      </div>
      <div className="Business-footer">
        <p className="Business-rating">{business.rating} stars</p>
        <p className="Business-reviews">{business.reviewCount} reviews</p>
      </div>
    </div>
  );
};

// End Stateless Functional Component

// class Business extends React.Component {
//   render() {
//     const {
//       imageSrc,
//       name,
//       address,
//       city,
//       state,
//       zipCode,
//       category,
//       rating,
//       reviewCount
//     } = this.business;
//     const bgStyle = {
//       backgroundImage: `url(${imageSrc})`
//     };
//     return (
//       <div className="Business">
//         <div className="Business-img" style={bgStyle} />
//         <div className="Business-address">
//           <h2>{name}</h2>
//           <p>{address}</p>
//           <p>
//             {city}, {state}
//           </p>
//           <p>{zipCode}</p>
//         </div>
//         <div className="Business-category">
//           <p>{category}</p>
//         </div>
//         <div className="Business-footer">
//           <p className="Business-rating">{rating} stars</p>
//           <p className="Business-reviews">{reviewCount} reviews</p>
//         </div>
//       </div>
//     );
//   }
// }

export default Business;

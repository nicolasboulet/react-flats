import React from "react";
import '../../assets/stylesheets/cards.scss';


const Flat = ({ name, price, pricecurrency, imageUrl }) => {
  return (
    
    <div className="card" style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.2)), url('${ imageUrl }')` }}>
      <div className="card-category">
        { `${price} `}
        { pricecurrency }
      </div>
      <div className="card-description">
        <h2>{name}</h2>
      </div>
      <a className="card-link" href="#"></a>
    </div>
  );
};

export default Flat;
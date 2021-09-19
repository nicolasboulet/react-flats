import React from "react";
import Flat from "./flat";
import flats from "../../data/flats";

const FlatList = () => {
  return (
    <div className="flat-list">
      {flats.map((flat) => {
        return (
          <Flat
            name={flat.name}
            key={flat.name}
            price={flat.price}
            pricecurrency={flat.priceCurrency}
            imageUrl={flat.imageUrl}
          />
        );
      })}
    </div>
  );
};

export default FlatList;

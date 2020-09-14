import React from "react";

export const ItemCard = (props) => {
  return (
    <React.Fragment>
      <img src={props.image} alt={props.alt} />
      <div>
        <h4>
          <b>{props.itemName}</b>
        </h4>
        <p>{props.itemDescription}</p>
        <p>{props.price}</p>
      </div>
    </React.Fragment>
  );
};

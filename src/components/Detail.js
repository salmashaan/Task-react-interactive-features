import React from "react";

function Detail(props) {
  return (
    <div className="productDetail">
      <img alt="cookie" src={props.cookie.image} />
      <p>{props.cookie.name}</p>
      <p className="product-price"> {props.cookie.price} KD</p>
      <p className="product-description"> {props.cookie.description} </p>
    </div>
  );
}

export default Detail;

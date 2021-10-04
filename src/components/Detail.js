import React from "react";
import { useState } from "react";
import ProductItem from "./ProductItem";
import SearchBar from "./SearchBar";
import products from "../products";

const productDetail = (props) => {
  const product = props.product;
  return (
    <div>
      <div className="productWrapper">
        <img alt={product.name} src={product.image} />
        <p>{product.name}</p>
        <p className="product-price">{product.price} KD</p>
        <p className="product-description"> {product.detail} </p>
      </div>
    </div>
  );
};

export default Detail;

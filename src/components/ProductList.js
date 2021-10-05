// Components
import { useState } from "react";
import ProductItem from "./ProductItem";
import SearchBar from "./SearchBar";
// Data
import products from "../products";

// const ProductList = () => {
// const productList = products.map((product) => (
//   <ProductItem product={product} key={product.id} />
// ));

const ProductList = (props) => {
  const [query, setQuery] = useState("");

  let filteredArray = products.filter((product) =>
    product.name.toLowerCase().includes(query.toLowerCase())
  );
  let mappedArray = filteredArray.map((product) => (
    <ProductItem
      product={product}
      setCookie={props.setCookie}
      key={product.id}
    />
  ));

  return (
    <>
      <SearchBar setQuery={setQuery} />
      <div className="listWrapper">{mappedArray}</div>
    </>
  );
};

export default ProductList;

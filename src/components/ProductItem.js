const ProductItem = (props) => {
  const product = props.product;

  return (
    <div className="productWrapper">
      <img alt={product.name} src={product.image} />
      <p>{product.name}</p>
      <p className="product-price">{product.price} KD</p>
      {/* <button onclick={productDetail}> Details </button> */}
    </div>
  );
};

export default ProductItem;

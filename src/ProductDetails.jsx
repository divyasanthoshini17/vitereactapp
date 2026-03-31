import React, { useEffect, useState } from "react";
import { Link, useOutletContext, useParams } from "react-router-dom";
import "./ProductDetails.css";

function ProductDetails() {
  const { id } = useParams();
  const {addToCart}= useOutletContext();

  const [product, setProduct] = useState({});

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct({ ...data }));
  }, [id]);

  return (
    <div className="product-details">

      <Link to={"/products"}><button>
        ← Back to Home
      </button></Link>

      <img src={product.thumbnail} alt={product.title} />

      <div className="details">
        <h1>{product.title}</h1>
        <p>{product.description}</p>
        <h2>${product.price}</h2>

        <button onClick={()=> addToCart(product)}>Add to Cart</button>
      </div>

    </div>
  );
}

export default ProductDetails;
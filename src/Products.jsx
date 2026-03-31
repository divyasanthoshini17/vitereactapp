import React from "react";
import { Link } from "react-router-dom";
import "./Products.css"

function Products() {
  const [prods, setProducts] = React.useState([]);
  React.useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts([...data.products]);
      });
  }, []);

  return (
    <div className="products-container">
      {prods.map((p) => {
        return (
          <div className="product-card" key={p.id}>
            <Link to={`/productDetails/${p.id}`} className="product-link">

              <img src={p.thumbnail} alt={p.title} />

              <h3>{p.title}</h3>

              <p className="price">${p.price}</p>

            </Link>
          </div>
        );
      })}
    </div>
  );
}

export default Products;
import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

const ProductCard = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error("API Error: ", err));
  }, []);
  
  if (!products) return <div className="text-center mt-5">Loading...</div>;

  return (
    <div>
      <Navbar />
      <div className="container mt-4">
        <h2 className="text-center mb-4">Product Grid</h2>
        <div className="row">
          {products.map((product) => (
            <div className="col-md-3 mb-4" key={product.id}>
              <div className="card h-100">
                <img
                  src={product.image}
                  className="card-img-top p-3"
                  alt={product.title}
                  style={{ height: "200px", objectFit: "contain" }}
                />
                <div className="card-body">
                  <h6 className="card-title">
                    {product.title.slice(0, 30)}...
                  </h6>
                  <p className="card-text">${product.price}</p>
                  <Link
                    to={`/product/${product.id}`}
                    className="btn btn-primary w-100"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Navbar";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data))
      .catch((err) => console.error("API Error:", err));
  }, [id]);

  if (!product) return <div className="text-center mt-5">Loading...</div>;

  return (
    <div>
      <Navbar />
      <div className="container mt-4 p-4">
        <h2 className="mb-3">{product.title}</h2>
        <div className="row">
          <div className="col-md-3">
            <img
              src={product.image}
              alt={product.title}
              className="img-fluid"
            />
          </div>
          <div className="col-md-7">
            <h4 className="text-muted">{product.category}</h4>
            <p>{product.description}</p>
            <h5>Price: ${product.price}</h5>
            <p>
              Rating: {product.rating.rate} ⭐ ({product.rating.count} reviews)
            </p>
          </div>
        </div>
      <div className="text-end mt-auto">
        <Link to='/' className="btn btn-primary w-20">
          Go Back
        </Link>
      </div>
      </div>
    </div>
  );
};

export default ProductDetails;

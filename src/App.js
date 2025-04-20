import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductDetails from './Pages/ProductDetails';
import ProductCard from './Pages/ProductCard';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ProductCard />} />
        <Route path="/product/:id" element={<ProductDetails />} />
      </Routes>
    </Router>
  );
};

export default App;

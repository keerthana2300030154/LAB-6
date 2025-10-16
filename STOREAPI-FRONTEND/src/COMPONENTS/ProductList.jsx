import { useState, useEffect } from "react";
import axios from "axios";
import config from "./config.js";

export default function ProductList() {
  const [products, setProducts] = useState([]);
  const baseUrl = `${config.url}/productapi`;

  const fetchProducts = async () => {
    try {
      const response = await axios.get(`${baseUrl}/all`);
      setProducts(response.data);
    } catch (err) {
      console.error("Failed to fetch products", err);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div>
      <h2 className="mb-3">📦 All Products</h2>
      <button className="btn btn-success mb-3" onClick={fetchProducts}>🔄 Refresh</button>

      {products.length > 0 ? (
        <table className="table table-bordered table-striped">
          <thead className="table-primary">
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Category</th>
              <th>Price (₹)</th>
            </tr>
          </thead>
          <tbody>
            {products.map(p => (
              <tr key={p.id}>
                <td>{p.id}</td>
                <td>{p.name}</td>
                <td>{p.category}</td>
                <td>{p.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No products available</p>
      )}
    </div>
  );
}

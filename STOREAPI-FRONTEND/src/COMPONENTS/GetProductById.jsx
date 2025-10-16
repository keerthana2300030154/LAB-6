import { useState } from "react";
import axios from "axios";
import config from "./config.js";

export default function GetProductById() {
  const [id, setId] = useState("");
  const [product, setProduct] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const baseUrl = `${config.url}/productapi`;

  const handleSearch = async () => {
    if (!id.trim() || isNaN(id)) {
      setError("⚠️ Please enter a valid numeric Product ID!");
      setProduct(null);
      return;
    }
    try {
      setLoading(true);
      const res = await axios.get(`${baseUrl}/get/${id}`);
      setProduct(res.data);
      setError("");
    } catch {
      setError(`❌ Product with ID ${id} not found.`);
      setProduct(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h2 className="mb-3">🔎 Get Product By ID</h2>
      <div className="mb-3">
        <input
          type="number"
          placeholder="Enter Product ID"
          value={id}
          onChange={e => setId(e.target.value)}
          className="form-control mb-2"
        />
        <button className="btn btn-info" onClick={handleSearch} disabled={loading}>
          {loading ? "Searching..." : "Search"}
        </button>
      </div>

      {error && <p className="text-danger">{error}</p>}

      {product && (
        <div className="card p-3 mt-3">
          <h5>📦 Product Details</h5>
          <p><strong>ID:</strong> {product.id}</p>
          <p><strong>Name:</strong> {product.name}</p>
          <p><strong>Category:</strong> {product.category}</p>
          <p><strong>Price:</strong> ₹{product.price}</p>
        </div>
      )}
    </div>
  );
}

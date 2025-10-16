import { useState } from "react";
import axios from "axios";
import config from "./config.js";

export default function UpdateProduct() {
  const [id, setId] = useState("");
  const [product, setProduct] = useState({ name: "", category: "", price: "" });
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const baseUrl = `${config.url}/productapi`;

  const handleSearch = async () => {
    if (!id || isNaN(id)) {
      setMessage("⚠️ Enter a valid numeric Product ID!");
      setProduct({ name: "", category: "", price: "" });
      return;
    }
    try {
      setLoading(true);
      const res = await axios.get(`${baseUrl}/get/${id}`);
      setProduct({ name: res.data.name, category: res.data.category, price: res.data.price });
      setMessage("");
    } catch {
      setMessage(`❌ Product with ID ${id} not found!`);
      setProduct({ name: "", category: "", price: "" });
    } finally {
      setLoading(false);
    }
  };

  const handleChange = e => setProduct({ ...product, [e.target.name]: e.target.value });

  const handleUpdate = async e => {
    e.preventDefault();
    try {
      await axios.put(`${baseUrl}/update`, { id: Number(id), ...product });
      setMessage(`✅ Product with ID ${id} updated successfully!`);
    } catch {
      setMessage("❌ Failed to update product.");
    }
  };

  return (
    <div>
      <h2 className="mb-3">✏️ Update Product</h2>
      <div className="mb-3">
        <input
          type="number"
          value={id}
          placeholder="Enter Product ID"
          onChange={e => setId(e.target.value)}
          className="form-control mb-2"
        />
        <button
          className="btn btn-warning"
          onClick={handleSearch}
          disabled={loading}
        >
          {loading ? "Searching..." : "Search"}
        </button>
      </div>

      {product.name && (
        <form onSubmit={handleUpdate}>
          <input
            type="text"
            name="name"
            value={product.name}
            onChange={handleChange}
            placeholder="Product Name"
            className="form-control mb-2"
            required
          />
          <input
            type="text"
            name="category"
            value={product.category}
            onChange={handleChange}
            placeholder="Category"
            className="form-control mb-2"
            required
          />
          <input
            type="number"
            name="price"
            value={product.price}
            onChange={handleChange}
            placeholder="Price"
            className="form-control mb-2"
            required
          />
          <button type="submit" className="btn btn-primary">Update Product</button>
        </form>
      )}

      {message && (
        <p className={`mt-2 ${message.startsWith("✅") ? "text-success" : "text-danger"}`}>
          {message}
        </p>
      )}
    </div>
  );
}

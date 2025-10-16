import { useState } from "react";
import axios from "axios";
import config from "./config.js";

export default function AddProduct({ refreshProducts }) {
  const [product, setProduct] = useState({ name: "", category: "", price: "" });
  const [message, setMessage] = useState("");
  const baseUrl = `${config.url}/productapi`;

  const handleChange = e => setProduct({ ...product, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      await axios.post(`${baseUrl}/add`, { ...product, price: Number(product.price) });
      setMessage("✅ Product added successfully!");
      setProduct({ name: "", category: "", price: "" });
      if (refreshProducts) refreshProducts();
    } catch {
      setMessage("❌ Failed to add product.");
    }
  };

  return (
    <div>
      <h2 className="mb-3">➕ Add Product</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" value={product.name} placeholder="Product Name" onChange={handleChange} className="form-control mb-2" required />
        <input type="text" name="category" value={product.category} placeholder="Category" onChange={handleChange} className="form-control mb-2" required />
        <input type="number" name="price" value={product.price} placeholder="Price" onChange={handleChange} className="form-control mb-2" required />
        <button type="submit" className="btn btn-primary">Add Product</button>
      </form>
      {message && <p className={`mt-2 ${message.startsWith("✅") ? "text-success" : "text-danger"}`}>{message}</p>}
    </div>
  );
}

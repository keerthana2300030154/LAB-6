import { useState } from "react";
import axios from "axios";
import config from "./config.js";

export default function DeleteProduct({ refreshProducts }) {
  const [id, setId] = useState("");
  const [message, setMessage] = useState("");
  const baseUrl = `${config.url}/productapi`;

  const handleDelete = async () => {
    if (!id.trim()) {
      setMessage("⚠️ Please enter a valid Product ID.");
      return;
    }
    try {
      await axios.delete(`${baseUrl}/delete/${id}`);
      setMessage(`✅ Product with ID ${id} deleted successfully.`);
      setId("");
      if (refreshProducts) refreshProducts();
    } catch {
      setMessage("❌ Failed to delete product. Please check ID.");
    }
  };

  return (
    <div>
      <h2 className="mb-3">🗑️ Delete Product</h2>
      <input
        type="number"
        placeholder="Enter Product ID"
        value={id}
        onChange={e => setId(e.target.value)}
        className="form-control mb-2"
      />
      <button className="btn btn-danger mb-2" onClick={handleDelete}>Delete</button>
      {message && (
        <p className={`${message.startsWith("✅") ? "text-success" : "text-danger"}`}>
          {message}
        </p>
      )}
    </div>
  );
}

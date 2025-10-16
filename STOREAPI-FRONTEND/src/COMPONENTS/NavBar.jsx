import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container">
        <Link className="navbar-brand" to="/products">Store Management</Link>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/products">Product List</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/add">Add Product</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/getbyid">Get Product By ID</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/update">Update Product</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/delete">Delete Product</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

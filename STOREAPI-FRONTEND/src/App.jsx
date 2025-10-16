import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./COMPONENTS/NavBar";
import ProductList from "./COMPONENTS/ProductList";
import AddProduct from "./COMPONENTS/AddProduct";
import UpdateProduct from "./COMPONENTS/UpdateProduct";
import DeleteProduct from "./COMPONENTS/DeleteProduct";
import GetProductById from "./COMPONENTS/GetProductById";

function App() {
  return (
    <Router>
      <NavBar />
      <div className="container mt-4">
        <Routes>
          <Route path="/products" element={<ProductList />} />
          <Route path="/add" element={<AddProduct />} />
          <Route path="/update" element={<UpdateProduct />} />
          <Route path="/delete" element={<DeleteProduct />} />
          <Route path="/getbyid" element={<GetProductById />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

import { Link, Route, Routes } from "react-router";
import ProductList from "./pages/ProductList.jsx";
import ProductDetail from "./pages/ProductDetail.jsx";
import ProductForm from "./pages/ProductForm.jsx";

export default function App() {
  return (
    <>
      <header>
        <h1><Link to="/">Product List</Link></h1>
        <nav><Link to="/products/new">Add a product</Link></nav>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/products/new" element={<ProductForm />} />
          <Route path="/products/:id" element={<ProductDetail />} />
          <Route path="/products/:id/edit" element={<ProductForm />} />
        </Routes>
      </main>
    </>
  );
}
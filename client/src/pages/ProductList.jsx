import { useEffect, useState } from "react";
import { Link } from "react-router";
import { listProducts } from "../api.js";

export default function ProductList() {
  const [status, setStatus] = useState("loading");
  const [products, setProducts] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    let ignore = false;
    listProducts()
      .then(data => { if (!ignore) { setProducts(data); setStatus("success"); } })
      .catch(err => { if (!ignore) { setError(err.message); setStatus("error"); } });
    return () => { ignore = true; };
  }, []);

  if (status === "loading") return <p role="status">Loading products…</p>;
  if (status === "error") return <p role="alert">Could not load products. {error}</p>;
  if (products.length === 0) return <p>No products yet. <Link to="/products/new">Add the first one</Link>.</p>;

  return (
    <section>
      <h2>Products</h2>
      <ul>
        {products.map(r => (
          <li key={r.id}><Link to={`/products/${r.id}`}>{r.name}</Link> · {r.category} · ${r.price.toFixed(2)} · {r.quantity} in stock</li>
        ))}
      </ul>
    </section>
  );
}
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router";
import { deleteProduct, getProduct } from "../api.js";

export default function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [status, setStatus] = useState("loading");
  const [product, setProduct] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    let ignore = false;
    setStatus("loading");
    getProduct(id)
      .then(data => { if (!ignore) { setProduct(data); setStatus("success"); } })
      .catch(err => { if (!ignore) { setError(err.message); setStatus("error"); } });
    return () => { ignore = true; };
  }, [id]);                                   // run again if the id in the URL changes

  async function handleDelete() {
    try {
      await deleteProduct(id);
      navigate("/");
    } catch (err) {
      setError(err.message);
      setStatus("error");
    }
  }

  if (status === "loading") return <p role="status">Loading…</p>;
  if (status === "error") return <p role="alert">{error} <Link to="/">Back to the list</Link></p>;

  return (
    <article>
      <h2>{product.name}</h2>
      <p>{product.category} · ${product.price.toFixed(2)} · {product.quantity} in stock</p>
      <p><Link to={`/products/${id}/edit`}>Edit</Link> <button onClick={handleDelete}>Delete</button></p>
    </article>
  );
}
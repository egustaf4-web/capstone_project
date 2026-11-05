import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { createProduct, getProduct, updateProduct } from "../api.js";

const EMPTY = { name: "", category: "Fruits", quantity: "", price: "" };

export default function ProductForm() {
  const { id } = useParams();                 // undefined on /products/new
  const editing = id !== undefined;
  const navigate = useNavigate();
  const [form, setForm] = useState(EMPTY);
  const [status, setStatus] = useState(editing ? "loading" : "ready");
  const [error, setError] = useState("");

  useEffect(() => {
    if (!editing) return;
    let ignore = false;
    getProduct(id)
      .then(r => { if (!ignore) { setForm({ name: r.name, category: r.category, quantity: String(r.quantity), price: String(r.price) }); setStatus("ready"); } })
      .catch(err => { if (!ignore) { setError(err.message); setStatus("error"); } });
    return () => { ignore = true; };
  }, [id, editing]);

  function handleChange(event) {
    setForm({ ...form, [event.target.name]: event.target.value });
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setStatus("saving");
    const product = { ...form, quantity: Number(form.quantity), price: Number(form.price) };
    try {
      const saved = editing ? await updateProduct(id, product) : await createProduct(product);
      navigate(`/products/${saved.id}`);
    } catch (err) {
      setError(err.message);
      setStatus("ready");                     // keep the form so the user can fix it
    }
  }

  if (status === "loading") return <p role="status">Loading…</p>;
  if (status === "error") return <p role="alert">{error}</p>;

  return (
    <form onSubmit={handleSubmit}>
      <h2>{editing ? "Edit product" : "Add a product"}</h2>
      {error && <p role="alert">{error}</p>}
      <label htmlFor="name">Name</label>
      <input id="name" name="name" value={form.name} onChange={handleChange} />
      <label htmlFor="category">Category</label>
      <select id="category" name="category" value={form.category} onChange={handleChange}>
        <option>Fruits</option>
        <option>Vegetables</option>
        <option>Dairy</option>
        <option>Bakery</option>
        <option>Meat & Seafood</option>
        <option>Beverages</option>
        <option>Snacks</option>
      </select>
      <label htmlFor="quantity">Quantity</label>
      <input id="quantity" name="quantity" type="number" min="0" step="1" value={form.quantity} onChange={handleChange} />
      <label htmlFor="price">Price</label>
      <input id="price" name="price" type="number" min="0.01" step="0.01" value={form.price} onChange={handleChange} />
      <button type="submit" disabled={status === "saving"}>{status === "saving" ? "Saving…" : "Save"}</button>
    </form>
  );
}
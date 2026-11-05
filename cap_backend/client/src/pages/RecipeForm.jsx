import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { createRecipe, getRecipe, updateRecipe } from "../api.js";

const EMPTY = { name: "", category: "Main", minutes: "" };

export default function RecipeForm() {
  const { id } = useParams();                 // undefined on /recipes/new
  const editing = id !== undefined;
  const navigate = useNavigate();
  const [form, setForm] = useState(EMPTY);
  const [status, setStatus] = useState(editing ? "loading" : "ready");
  const [error, setError] = useState("");

  useEffect(() => {
    if (!editing) return;
    let ignore = false;
    getRecipe(id)
      .then(r => { if (!ignore) { setForm({ name: r.name, category: r.category, minutes: String(r.minutes) }); setStatus("ready"); } })
      .catch(err => { if (!ignore) { setError(err.message); setStatus("error"); } });
    return () => { ignore = true; };
  }, [id, editing]);

  function handleChange(event) {
    setForm({ ...form, [event.target.name]: event.target.value });
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setStatus("saving");
    const recipe = { ...form, minutes: Number(form.minutes) };
    try {
      const saved = editing ? await updateRecipe(id, recipe) : await createRecipe(recipe);
      navigate(`/recipes/${saved.id}`);
    } catch (err) {
      setError(err.message);
      setStatus("ready");                     // keep the form so the user can fix it
    }
  }

  if (status === "loading") return <p role="status">Loading…</p>;
  if (status === "error") return <p role="alert">{error}</p>;

  return (
    <form onSubmit={handleSubmit}>
      <h2>{editing ? "Edit recipe" : "Add a recipe"}</h2>
      {error && <p role="alert">{error}</p>}
      <label htmlFor="name">Name</label>
      <input id="name" name="name" value={form.name} onChange={handleChange} />
      <label htmlFor="category">Category</label>
      <select id="category" name="category" value={form.category} onChange={handleChange}>
        <option>Breakfast</option>
        <option>Main</option>
        <option>Dessert</option>
      </select>
      <label htmlFor="minutes">Minutes</label>
      <input id="minutes" name="minutes" type="number" min="1" value={form.minutes} onChange={handleChange} />
      <button type="submit" disabled={status === "saving"}>{status === "saving" ? "Saving…" : "Save"}</button>
    </form>
  );
}
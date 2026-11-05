import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router";
import { deleteRecipe, getRecipe } from "../api.js";

export default function RecipeDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [status, setStatus] = useState("loading");
  const [recipe, setRecipe] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    let ignore = false;
    setStatus("loading");
    getRecipe(id)
      .then(data => { if (!ignore) { setRecipe(data); setStatus("success"); } })
      .catch(err => { if (!ignore) { setError(err.message); setStatus("error"); } });
    return () => { ignore = true; };
  }, [id]);                                   // run again if the id in the URL changes

  async function handleDelete() {
    try {
      await deleteRecipe(id);
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
      <h2>{recipe.name}</h2>
      <p>{recipe.category} · {recipe.minutes} min</p>
      <p><Link to={`/recipes/${id}/edit`}>Edit</Link> <button onClick={handleDelete}>Delete</button></p>
    </article>
  );
}
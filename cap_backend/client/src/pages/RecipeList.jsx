import { useEffect, useState } from "react";
import { Link } from "react-router";
import { listRecipes } from "../api.js";

export default function RecipeList() {
  const [status, setStatus] = useState("loading");
  const [recipes, setRecipes] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    let ignore = false;
    listRecipes()
      .then(data => { if (!ignore) { setRecipes(data); setStatus("success"); } })
      .catch(err => { if (!ignore) { setError(err.message); setStatus("error"); } });
    return () => { ignore = true; };
  }, []);

  if (status === "loading") return <p role="status">Loading recipes…</p>;
  if (status === "error") return <p role="alert">Could not load recipes. {error}</p>;
  if (recipes.length === 0) return <p>No recipes yet. <Link to="/recipes/new">Add the first one</Link>.</p>;

  return (
    <section>
      <h2>Recipes</h2>
      <ul>
        {recipes.map(r => (
          <li key={r.id}><Link to={`/recipes/${r.id}`}>{r.name}</Link> · {r.category} · {r.minutes} min</li>
        ))}
      </ul>
    </section>
  );
}
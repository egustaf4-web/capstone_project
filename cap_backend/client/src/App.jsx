import { Link, Route, Routes } from "react-router";
import RecipeList from "./pages/RecipeList.jsx";
import RecipeDetail from "./pages/RecipeDetail.jsx";
import RecipeForm from "./pages/RecipeForm.jsx";

export default function App() {
  return (
    <>
      <header>
        <h1><Link to="/">Recipe Box</Link></h1>
        <nav><Link to="/recipes/new">Add a recipe</Link></nav>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<RecipeList />} />
          <Route path="/recipes/new" element={<RecipeForm />} />
          <Route path="/recipes/:id" element={<RecipeDetail />} />
          <Route path="/recipes/:id/edit" element={<RecipeForm />} />
        </Routes>
      </main>
    </>
  );
}
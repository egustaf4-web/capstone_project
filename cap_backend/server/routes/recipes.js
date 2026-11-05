// Routing only: translate HTTP into calls to the store, and results into status codes.
import { Router } from "express";
import * as store from "../services/recipeStore.js";

const router = Router();

const notFound = id => ({ error: { code: "NOT_FOUND", message: `No recipe with id ${id}` } });
const invalid = details => ({ error: { code: "VALIDATION_FAILED", message: "The recipe is not valid", details } });

// An id must be written as a positive whole number, e.g., "3", but not "3.0", "03", or "abc".
// Anything else becomes null, which matches no recipe, so the route answers 404.
const toId = text => (/^[1-9][0-9]*$/.test(text) ? Number(text) : null);

// GET /api/recipes: 200 and the list
router.get("/", (req, res) => {
  res.status(200).json(store.list());
});

// GET /api/recipes/:id: 200 and the recipe, or 404
router.get("/:id", (req, res) => {
  const recipe = store.get(toId(req.params.id));
  if (!recipe) return res.status(404).json(notFound(req.params.id));
  res.status(200).json(recipe);
});

// POST /api/recipes: 201 and the created recipe, or 400
router.post("/", (req, res) => {
  const problems = store.validate(req.body);
  if (problems.length > 0) return res.status(400).json(invalid(problems));
  res.status(201).json(store.create(req.body));
});

// PUT /api/recipes/:id: 200 and the updated recipe, 400, or 404
router.put("/:id", (req, res) => {
  const problems = store.validate(req.body);
  if (problems.length > 0) return res.status(400).json(invalid(problems));
  const updated = store.update(toId(req.params.id), req.body);
  if (!updated) return res.status(404).json(notFound(req.params.id));
  res.status(200).json(updated);
});

// DELETE /api/recipes/:id: 204 with no body, or 404
router.delete("/:id", (req, res) => {
  if (!store.remove(toId(req.params.id))) return res.status(404).json(notFound(req.params.id));
  res.status(204).end();
});

export default router;
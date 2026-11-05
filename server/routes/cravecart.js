// Routing only: translate HTTP into calls to the store, and results into status codes.
import { Router } from "express";
import * as store from "../services/craveStore.js";

const router = Router();

const notFound = id => ({ error: { code: "NOT_FOUND", message: `No product with id ${id}` } });
const invalid = details => ({ error: { code: "VALIDATION_FAILED", message: "The product is not valid", details } });

// An id must be written as a positive whole number, e.g., "3", but not "3.0", "03", or "abc".
// Anything else becomes null, which matches no product, so the route answers 404.
const toId = text => (/^[1-9][0-9]*$/.test(text) ? Number(text) : null);

// GET /api/products: 200 and the list
router.get("/", (req, res) => {
  res.status(200).json(store.list());
});

// GET /api/products/:id: 200 and the product, or 404
router.get("/:id", (req, res) => {
  const product = store.get(toId(req.params.id));
  if (!product) return res.status(404).json(notFound(req.params.id));
  res.status(200).json(product);
});

// POST /api/products: 201 and the created product, or 400
router.post("/", (req, res) => {
  const problems = store.validate(req.body);
  if (problems.length > 0) return res.status(400).json(invalid(problems));
  res.status(201).json(store.create(req.body));
});

// PUT /api/products/:id: 200 and the updated product, 400, or 404
router.put("/:id", (req, res) => {
  const problems = store.validate(req.body);
  if (problems.length > 0) return res.status(400).json(invalid(problems));
  const updated = store.update(toId(req.params.id), req.body);
  if (!updated) return res.status(404).json(notFound(req.params.id));
  res.status(200).json(updated);
});

// DELETE /api/products/:id: 204 with no body, or 404
router.delete("/:id", (req, res) => {
  if (!store.remove(toId(req.params.id))) return res.status(404).json(notFound(req.params.id));
  res.status(204).end();
});

export default router;
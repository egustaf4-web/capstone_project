// Builds the Express app and exports it; index.js starts the server. Tests import this file.
import express from "express";
import productsRouter from "./routes/cravecart.js";

const app = express();
app.use(express.json());

app.use("/api/products", productsRouter);

// Any other /api path: a JSON 404, not Express's HTML page
app.use("/api", (req, res) => {
  res.status(404).json({ error: { code: "NOT_FOUND", message: "No such endpoint" } });
});

// Errors: malformed JSON becomes a 400; anything else is loggrecipeed here and hidden from the client
app.use((err, req, res, next) => {
  if (err.type === "entity.parse.failed") {
    return res.status(400).json({ error: { code: "BAD_JSON", message: "The request body is not valid JSON" } });
  }
  console.error(err);
  res.status(500).json({ error: { code: "SERVER_ERROR", message: "Something went wrong" } });
});

export default app;
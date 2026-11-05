import app from "./app.js";

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Crave Cart API on http://localhost:${PORT}`));
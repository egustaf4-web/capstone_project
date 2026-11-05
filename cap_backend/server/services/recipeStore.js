// Business logic and data: no Express here, so it can be tested and changed on its own.
const CATEGORIES = ["Breakfast", "Main", "Dessert"];
const SEED = [
  { id: 1, name: "Shakshuka", category: "Breakfast", minutes: 30 },
  { id: 2, name: "Black Bean Tacos", category: "Main", minutes: 25 },
  { id: 3, name: "Mushroom Risotto", category: "Main", minutes: 40 },
  { id: 4, name: "Apple Crumble", category: "Dessert", minutes: 45 },
];

let recipes = [];
let nextId = 1;

export function reset() {
  recipes = SEED.map(r => ({ ...r }));
  nextId = SEED.length + 1;
}
reset();

export function list() {
  return recipes;
}

export function get(id) {
  return recipes.find(r => r.id === id) ?? null;
}

// Returns a list of problems; an empty list means the recipe is valid
export function validate(body) {
  const problems = [];
  if (typeof body?.name !== "string" || body.name.trim() === "") {
    problems.push("name is required");
  }
  if (!CATEGORIES.includes(body?.category)) {
    problems.push(`category must be one of: ${CATEGORIES.join(", ")}`);
  }
  if (!Number.isInteger(body?.minutes) || body.minutes <= 0) {
    problems.push("minutes must be a positive whole number");
  }
  return problems;
}

export function create({ name, category, minutes }) {
  const recipe = { id: nextId++, name: name.trim(), category, minutes };
  recipes.push(recipe);
  return recipe;
}

export function update(id, { name, category, minutes }) {
  const recipe = get(id);
  if (!recipe) return null;
  Object.assign(recipe, { name: name.trim(), category, minutes });
  return recipe;
}

export function remove(id) {
  const before = recipes.length;
  recipes = recipes.filter(r => r.id !== id);
  return recipes.length < before;
}
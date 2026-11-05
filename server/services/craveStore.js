// Business logic and data: no Express here, so it can be tested and changed on its own.
const CATEGORIES = ["Fruits", "Vegetables", "Dairy", "Bakery", "Meat & Seafood", "Beverages", "Snacks"];
const SEED = [
  { id: 1, name: "Apples",                 category: "Fruits", quantity: 5, price: 1.99, image: "images/apples.jpeg", alt: "A pile of apples" },
  { id: 2, name: "Bananas",                category: "Fruits", quantity: 7, price: 1.00, image: "images/bananas.jpg", alt: "A bundle of bananas" },
  { id: 3, name: "Mangos",                 category: "Fruits", quantity: 12, price: 1.25, image: "images/mangos.jpg", alt: "Two mangos and some sliced mango"  },
  { id: 4, name: "Strawberries",           category: "Fruits", quantity: 7, price: 2.69, image: "images/strawberries.jpeg", alt: "A pile of strawberries" },
  { id: 5, name: "Grapes",                 category: "Fruits", quantity: 3, price: 1.99, image: "images/grapes.jpg", alt: "A bundle of grapes" },
  { id: 6, name: "Broccoli",               category: "Vegetables", quantity: 7, price: 2.29, image: "images/broccoli.jpg", alt: "Two pieces of broccoli" },
  { id: 7, name: "Celery",                 category: "Vegetables", quantity: 5, price: 1.00, image: "images/celery.jpg", alt: "A stalk and a stem of celery" },
  { id: 8, name: "Carrots",                category: "Vegetables", quantity: 8, price: 2.19, image: "images/carrots.jpg", alt: "A pile of carrots" },
  { id: 9, name: "Cucumbers",              category: "Vegetables", quantity: 12, price: 0.80, image: "images/cucumbers.jpg", alt: "Two cucumbers and sliced cucumber" },
  { id: 10, name: "Cauliflower",           category: "Vegetables", quantity: 7, price: 2.99, image: "images/cauliflower.jpg", alt: "A head of cauliflower" },
  { id: 11, name: "Milk",                  category: "Dairy", quantity: 10, price: 2.62, image: "images/milk.jpg", alt: "A jug of milk" },
  { id: 12, name: "Yogurt",                category: "Dairy", quantity: 14, price: 2.99, image: "images/yogurt.jpg", alt: "A container of yogurt" },
  { id: 13, name: "Cheese",                category: "Dairy", quantity: 8, price: 1.99, image: "images/cheese.jpg", alt: "A package of cheese" },
  { id: 14, name: "Ice cream",             category: "Dairy", quantity: 10, price: 3.25, image: "images/ice_cream.jpg", alt: "A container of ice cream" },
  { id: 15, name: "Cream cheese",          category: "Dairy", quantity: 8, price: 1.65, image: "images/cream_cheese.jpg", alt: "A block of cream cheese" },
  { id: 16, name: "Cakes",                 category: "Bakery", quantity: 3, price: 4.35, image: "images/cake.jpg", alt: "A cake in a plastic container" },
  { id: 17, name: "Cookies",               category: "Bakery", quantity: 7, price: 4.39, image: "images/cookies.jpg", alt: "A pack of cookies" },
  { id: 18, name: "Bread",                 category: "Bakery", quantity: 10, price: 3.49, image: "images/bread.jpg", alt: "A bag of bread" },
  { id: 19, name: "Pastries",              category: "Bakery", quantity: 5, price: 3.85, image: "images/pastries.jpg", alt: "A package of croissants" },
  { id: 20, name: "Donuts",                category: "Bakery", quantity: 4, price: 3.75, image: "images/donuts.jpg", alt: "A container full of donuts" },
  { id: 21, name: "Beef",                  category: "Meat & Seafood", quantity: 5, price: 5.99, image: "images/beef.jpg", alt: "A package of ground beef" },
  { id: 22, name: "Pork",                  category: "Meat & Seafood", quantity: 7, price: 3.65, image: "images/pork.jpg", alt: "A package of ground pork" },
  { id: 23, name: "Salmon",                category: "Meat & Seafood", quantity: 3, price: 9.00, image: "images/salmon.jpg", alt: "A package of salmon" },
  { id: 24, name: "Cod",                   category: "Meat & Seafood", quantity: 5, price: 10.89, image: "images/cod.jpg", alt: "A bag of cod" },
  { id: 25, name: "Haddock",               category: "Meat & Seafood", quantity: 10, price: 9.89, image: "images/haddock.jpg", alt: "A bag of haddock" },
  { id: 26, name: "Water",                 category: "Beverages", quantity: 10, price: 3.55, image: "images/water.jpg", alt: "A package of water bottles" },
  { id: 27, name: "Juice",                 category: "Beverages", quantity: 14, price: 2.45, image: "images/juice.jpg", alt: "A large bottle of juice" },
  { id: 28, name: "Soda",                  category: "Beverages", quantity: 10, price: 1.00, image: "images/soda.jpeg", alt: "A large bottle of cola" },
  { id: 29, name: "Coffee",                category: "Beverages", quantity: 8, price: 12.65, image: "images/coffee.jpg", alt: "A container of coffee grounds" },
  { id: 30, name: "Tea",                   category: "Beverages", quantity: 7, price: 1.00, image: "images/tea.jpg", alt: "A bottle of tea" },
  { id: 31, name: "Crackers",              category: "Snacks", quantity: 8, price: 2.45, image: "images/crackers.jpg", alt: "A box of crackers" },
  { id: 32, name: "Fruit snacks",          category: "Snacks", quantity: 12, price: 4.95, image: "images/fruit_snacks.jpg", alt: "A box of fruit snacks" },
  { id: 33, name: "Popcorn",               category: "Snacks", quantity: 12, price: 4.95, image: "images/popcorn.jpg", alt: "A box of popcorn bags" },
  { id: 34, name: "Chocolate pudding",     category: "Snacks", quantity: 16, price: 1.45, image: "images/chocolate_pudding.jpg", alt: "A pack of chocolate pudding cups" },
  { id: 35, name: "Trail mix",             category: "Snacks", quantity: 8, price: 6.39, image: "images/trail_mix.jpg", alt: "A bag of trail mix" },
];

let products = [];
let nextId = 1;

export function reset() {
  products = SEED.map(r => ({ ...r }));
  nextId = SEED.length + 1;
}
reset();

export function list() {
  return products;
}

export function get(id) {
  return products.find(r => r.id === id) ?? null;
}

// Returns a list of problems; an empty list means the products is valid
export function validate(body) {
  const problems = [];
  if (typeof body?.name !== "string" || body.name.trim() === "") {
    problems.push("name is required");
  }
  if (!CATEGORIES.includes(body?.category)) {
    problems.push(`category must be one of: ${CATEGORIES.join(", ")}`);
  }
  if (!Number.isInteger(body?.quantity) || body.quantity < 0) {
    problems.push("quantity must be a whole number, 0 or more");
  }
  if (typeof body?.price !== "number" || body.price <= 0) {
  problems.push("price must be a number greater than 0");
  }
  return problems;
}

export function create({ name, category, quantity, price }) {
  const product = { id: nextId++, name: name.trim(), category, quantity, price };
  products.push(product);
  return product;
}

export function update(id, { name, category, quantity, price }) {
  const product = get(id);
  if (!product) return null;
  Object.assign(product, { name: name.trim(), category, quantity, price });
  return product;
}

export function remove(id) {
  const before = products.length;
  products = products.filter(r => r.id !== id);
  return products.length < before;
}
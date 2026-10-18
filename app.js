// Product List
const products = [
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
  { id: 14, name: "Ice cream",             category: "Dairy", quantity: 10, price: 3.25, image: "images/ice_cream.jpg", alt: "A containiner of ice cream" },
  { id: 15, name: "Cream cheese",          category: "Dairy", quantity: 8, price: 1.65, image: "images/cream_cheese.jpg", alt: "A block of cream cheese" },
  { id: 16, name: "Cakes",                 category: "Bakery", quantity: 3, price: 4.35, image: "images/cake.jpg", alt: "A cake in a plastic container" },
  { id: 17, name: "Cookies",               category: "Bakery", quantity: 7, price: 4.39, image: "images/cookies.jpg", alt: "A pack of cookies" },
  { id: 18, name: "Bread",                 category: "Bakery", quantity: 10, price: 3.49, image: "images/bread.jpg", alt: "A bag of bread" },
  { id: 19, name: "Pastries",              category: "Bakery", quantity: 5, price: 3.85, image: "images/pastries.jpg", alt: "A package of croissants" },
  { id: 20, name: "Donuts",                category: "Bakery", quantity: 4, price: 3.75, image: "images/donuts.jpg", alt: "A container full of donuts" },
  { id: 21, name: "Beef",                  category: "Meat & Seafood", quantity: 5, price: 5.99, image: "images/beef.jpg", alt: "A package of ground beef" },
  { id: 22, name: "Pork",                  category: "Meat & Seafood", quantity: 7, price: 3.65, image: "images/pork.jpg", alt: "A package of ground pork" },
  { id: 23, name: "Salmon",                category: "Meat & Seafood", quantity: 3, price: 9.00, image: "images/salmon.jpg", alt: "A package of salmon" },
  { id: 24, name: "Cod",                   category: "Meat & Seafood", quantity: 5, price: 10.89, image: "images/cod.jpg", alt: "A bad of cod" },
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

// Query Selectors: finds elements on the page
const list = document.querySelector("#list");
const count = document.querySelector("#count");
const searchInput = document.querySelector("#search");
const categorySelect = document.querySelector("#category");
const form = document.querySelector(".controls");
const loginForm = document.querySelector(".login-form");
const usernameInput = document.querySelector("#username");
const welcome = document.querySelector("#welcome");

// Data: matches the input to a product and category
function visibleProducts() {
  const query = searchInput.value.trim().toLowerCase();
  const category = categorySelect.value;

  return products
    .filter(r => category === "All" || r.category === category)
    .filter(r => r.name.toLowerCase().includes(query));
}

// Rendering: lists products that match the search
function render(data) {
  list.innerHTML = "";
  count.textContent = data.length === 0
    ? "No products match. Try entering another product or category."
    : `${data.length} product(s)`;

  data.forEach(r => {
    const li = document.createElement("li");
    li.className = "card";

    const article = document.createElement("article");
    const title = document.createElement("h3");
    title.textContent = r.name;
    const img = document.createElement("img");
    img.src = r.image;
    img.alt = r.name;

    const price = document.createElement("p");
    price.className = "price";
    price.textContent = `$${r.price.toFixed(2)}`;

    const inventory = document.createElement("p");
    inventory.textContent = r.quantity > 0 ? `${r.quantity} in stock` : "Out of stock";

    article.append(img, title, price, inventory);
    li.appendChild(article);
    list.appendChild(li);
  });
}

//Login: shows a welcome message after login
function logIn(event) {
  event.preventDefault();
  const name = usernameInput.value.trim();
  welcome.textContent = `Welcome ${name}!`;
  loginForm.hidden = true;
}

// Event Listeners
loginForm.addEventListener("submit", logIn);
searchInput.addEventListener("input", () => render(visibleProducts()));
categorySelect.addEventListener("change", () => render(visibleProducts()));
form.addEventListener("submit", event => event.preventDefault());

render(visibleProducts());
# Handoff package
## Project: CraveCart (grocery inventory)
### Owner: Emma & Vanshika

CraveCart is a mock grocery store catalog that lets visitors browse products across categories, search by item name, filter by category, and log in to view a personalized welcome message. The layout is fully responsive for mobile, tablet, and desktop devices. The tech stack includes HTML5, CSS **(Flexbox, Grid, custom properties)**, and vanilla ES6+ JavaScript, and a backend Express API for product management. 

The forntend still has simulated login behavior, while the backend now supports product CRUD through an Express API.The current login is simulated; it accepts any username and password without storing credentials. Product data is now managed vy the backend a service layer instead of being hardcoded in the frontend only, meaning changes reset on page refresh. Additionally, **[hidden] { display: none !important; }** is used to hide the login modal. Craving something? Easily filter out exactly what you're looking for!

## File Directory Overview
- **Index.html:** Contains the primary structure and UI elements, including buttons for products, signing in, searching, and filtering. It also manages the available grocery categories.
- **Styles.css:** Defines the site's visual styling, such as fonts, colors, and typography. It also handles responsive layout media queries for desktop, tablet, and mobile devices.
- **App.js:** Manages frontend interaction and UI behavior, while the backend service and routes now handle product data, validation, and CRUD operations.
- **Images:** Stores all product imagery and logo assets in a unified directory.

## Next Step

## API contract
Current state: The project includes a working Express HTTP API. Product data is stored and managed in the backend service layer , not directly in the fronttend app.js file.

## Bugs
When loading the website using Live Server, a 404 console error initially appeared. However, refreshing the page resolved the issue, and it did not recur even after restarting Live Server. To address this, all images were consolidated into a single folder and accessed directly from that directory, successfully resolving the console error.

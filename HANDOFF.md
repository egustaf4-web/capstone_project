# Handoff package
## Project: CraveCart (grocery inventory)
### Owner: Emma & Vanshika

CraveCart is a mock grocery store catalog that lets visitors browse products across categories, search by item name, filter by category, and log in to view a personalized welcome message. The layout is fully responsive for mobile, tablet, and desktop devices. The tech stack includes HTML5, CSS **(Flexbox, Grid, custom properties)**, and vanilla ES6+ JavaScript, with no backend integration currently implemented.
Real authentication, data persistence, cart management, and item modification **(add, edit, delete)** have not yet been built. The current login is simulated; it accepts any username and password without storing credentials and product data is hardcoded in app.js, meaning changes reset on page refresh. Additionally, **[hidden] { display: none !important; }** is used to hide the login modal. Craving something? Easily filter out exactly what you're looking for!

## File Directory Overview
- **Index.html:** Contains the primary structure and UI elements, including buttons for products, signing in, searching, and filtering. It also manages the available grocery categories.
- **Styles.css:** Defines the site's visual styling, such as fonts, colors, and typography. It also handles responsive layout media queries for desktop, tablet, and mobile devices.
- **App.js:** Manages interactive site functionality for all buttons, while governing the product list, image sources, alt attributes, pricing, and image sizing—handling the entire product component via JavaScript.
- **Images:** Stores all product imagery and logo assets in a unified directory.

## Next Step
To build API Contract

## API contract
Current state: there is no HTTP API. The data is the products array in app.js.

## Bugs
When loading the website using Live Server, a 404 console error initially appeared. However, refreshing the page resolved the issue, and it did not recur even after restarting Live Server. To address this, all images were consolidated into a single folder and accessed directly from that directory, successfully resolving the console error.

# Capstone Project

## **Names**: Vanshika and Emma

## **Project Description**:
For this project, our idea is to create a grocery store and manage its inventory that stores the following data:
- Stores the different food groups.
- The quantity of each item.
- The price of each item.


## **Technical Reflection**:

We have used landmarks that match the content structure (header with nav, one main with four sections and a footer). Headings go h1 to h2 with no gaps in the hierarchy and each product is an article with the product name as the h3. Each control has a visible label with the appropriate for/id. ARIA is used only where there is a gap in the native semantics (role="status" on the result count and welcome message to announce the updates and role="search" on the filter form). The product images have their alt text taken from the per product field in the data rather than just using the product name so the alt text is specific to the image. As the cards are created dynamically with javaScript we set the alt text when the image is created rather than after the element has been inserted into the DOM so every image in the page has a description. The end result is a page where a screen reader user can jump around the landmarks, navigate through headings and hear every form field announced with its meaningful description.

Flexbox is the tool for one dimensional flows where the size of the content is what drives the layout. That's the header (logo on the left, nav on the right, wrapping at the narrow screen breakpoint), the nav list and the stacked label/input pairs in the forms. Grid is the tool for two dimensional layouts where you want to define your tracks first. The product list uses a repeat style of column tracks that goes from 1 to 2 to 3 columns at the tablet and desktop breakpoints. A flex-wrap approach would leave the items in the final row of that list with very uneven sizing whereas fixed grid tracks ensure that every card is aligned. The tablet main is also a grid with the search and login side by side and the products and about taking up the full width with grid-column: 1 / -1.

Challenge: Our main layout roadblock hit at the tablet breakpoint: positioning the "#look-up" (search) and "#log-in" forms side-by-side. Initially, we tried applying CSS alignment properties directly to internal form controls. However, this only shifted child labels and inputs while leaving parent headings anchored on the left, causing visual misalignment between forms and their headers.
We resolved this by shifting grid context to the parent container. By declaring main as a two-column CSS Grid at the tablet media query, we placed #look-up in column 1 and #log-in in column 2. Treating whole section elements as grid items ensured headings and form elements moved as unified blocks, while subsequent full-width sections used grid-column: 1 / -1 to span across both columns smoothly.




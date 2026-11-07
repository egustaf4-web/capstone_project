# CraveCart API contract

Base path: `/api`. Request and response bodies are JSON. Every error has the same shape:

```json
{ "error": { "code": "NOT_FOUND", "message": "No product with id 99" } }
```

A validation error also lists what failed:

```json
{ "error": { "code": "VALIDATION_FAILED", "message": "The product is not valid",
             "details": ["quantity, price must be a positive whole number"] } }
```

## The resource: a product

| Field | Type | Rules |
|---|---|---|
| `id` | integer | assigned by the server |
| `name` | string | required, not blank |
| `category` | string | one of `Fruits`, `Vegatables`, `Dairy`, `Bakery` `Meat & Seafood`, `Beverages`, `Snacks` |
| `quantity` | integer | required, allowed to be 0 or more|
| `price` | integer | required, greater than 0 |
| `image` | jpg     | A image of products|
| `Alt`   | string  | Alt of the image |

## Endpoints

| Method and path | Request body | Success | Errors |
|---|---|---|---|
| `GET /api/products` | none | `200` and an array of products | none |
| `GET /api/products/:id` | none | `200` and the product | `404 NOT_FOUND` |
| `POST /api/products` | `{ name, category, quantity, price }` | `201` and the created product, with its `id` | `400 VALIDATION_FAILED`, `400 BAD_JSON` |
| `PUT /api/products/:id` | `{ name, category, quantity, price }` | `200` and the updated product | `400 VALIDATION_FAILED`, `400 BAD_JSON`, `404 NOT_FOUND` |
| `DELETE /api/products/:id` | none | `204` and no body | `404 NOT_FOUND` |

Two rules for the error cases:

- On `PUT`, the body is checked first: an invalid body returns `400 VALIDATION_FAILED` even when no product has that id.
- An id has to be written as a positive whole number, e.g., `3`. Any other id, e.g., `abc`, `3.0`, or `03`, returns `404 NOT_FOUND`, since no product has that id.

Any other path under `/api` returns `404 NOT_FOUND`. An unexpected server error returns `500 SERVER_ERROR` with a generic message; details are logged on the server only.

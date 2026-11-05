# Recipe Box API contract

Base path: `/api`. Request and response bodies are JSON. Every error has the same shape:

```json
{ "error": { "code": "NOT_FOUND", "message": "No recipe with id 99" } }
```

A validation error also lists what failed:

```json
{
    "error": {
        "code": "VALIDATION_FAILED",
        "message": "The recipe is not valid",
        "details": ["minutes must be a positive whole number"]
    }
}
```

## The resource: a recipe

| Field      | Type    | Rules                                 |
| ---------- | ------- | ------------------------------------- |
| `id`       | integer | assigned by the server                |
| `name`     | string  | required, not blank                   |
| `category` | string  | one of `Breakfast`, `Main`, `Dessert` |
| `minutes`  | integer | required, greater than 0              |

## Endpoints

| Method and path           | Request body                  | Success                                     | Errors                                                   |
| ------------------------- | ----------------------------- | ------------------------------------------- | -------------------------------------------------------- |
| `GET /api/recipes`        | none                          | `200` and an array of recipes               | none                                                     |
| `GET /api/recipes/:id`    | none                          | `200` and the recipe                        | `404 NOT_FOUND`                                          |
| `POST /api/recipes`       | `{ name, category, minutes }` | `201` and the created recipe, with its `id` | `400 VALIDATION_FAILED`, `400 BAD_JSON`                  |
| `PUT /api/recipes/:id`    | `{ name, category, minutes }` | `200` and the updated recipe                | `400 VALIDATION_FAILED`, `400 BAD_JSON`, `404 NOT_FOUND` |
| `DELETE /api/recipes/:id` | none                          | `204` and no body                           | `404 NOT_FOUND`                                          |

Two rules for the error cases:

- On `PUT`, the body is checked first: an invalid body returns `400 VALIDATION_FAILED` even when no recipe has that id.
- An id has to be written as a positive whole number, e.g., `3`. Any other id, e.g., `abc`, `3.0`, or `03`, returns `404 NOT_FOUND`, since no recipe has that id.

Any other path under `/api` returns `404 NOT_FOUND`. An unexpected server error returns `500 SERVER_ERROR` with a generic message; details are logged on the server only.

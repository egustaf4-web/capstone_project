import { describe, it, expect, beforeEach } from "vitest";
import request from "supertest";
import app from "../app.js";
import { reset } from "../services/craveStore.js";


beforeEach(() => reset());


describe("GET /api/products", () => {
  it("returns 200 and the list of products", async () => {
    const res = await request(app).get("/api/products");


    expect(res.status).toBe(200);
    expect(res.body).toHaveLength(35);
    expect(res.body[0]).toMatchObject({ id: 1, name: "Apples" });
  });
});


describe("POST /api/products", () => {
  it("returns 201 and the created product", async () => {
    const res = await request(app)
      .post("/api/products")
      .send({ name: "Chocolate", category: "Dairy", quantity: 5, price: 3.99 });


    expect(res.status).toBe(201);
    expect(res.body).toEqual({ id: 36, name: "Chocolate", category: "Dairy", quantity: 5, price: 3.99 });
  });
});


describe("errors follow the contract", () => {
  it("returns 404 for a product that doesn't exist", async () => {
    const res = await request(app).get("/api/products/99");


    expect(res.status).toBe(404);
    expect(res.body.error.code).toBe("NOT_FOUND");
  });


  it("returns 400 and the problems for an invalid product", async () => {
    const res = await request(app).post("/api/products").send({ name: "Mangos", category: "Fruits" });


    expect(res.status).toBe(400);
    expect(res.body.error.details).toContain("quantity must be a whole number, 0 or more");
    expect(res.body.error.details).toContain("price must be a number greater than 0");

  });
});
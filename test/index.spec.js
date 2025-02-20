import request from "supertest";
import mongoose from "mongoose";
import app from "../src/app.js";
import Product from "../src/models/Product.js";
import { jest } from "@jest/globals";

beforeAll(async () => {
  jest.setTimeout(10000); // Aumenta el tiempo de espera a 10 segundos
  await mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  // Limpia la base de datos antes de correr los tests
  await Product.deleteMany();

  // Inserta un producto de prueba
  await Product.create({
    name: "Test Product",
    description: "Test Description",
    price: 10,
    stock: 100,
    imageUrl: "/uploads/test.jpg",
    createdAt: new Date(),
  });
});

afterAll(async () => {
  await mongoose.connection.close(); // Cierra la conexión al terminar los tests
});

describe("GET /products", () => {
  test("should respond with a 200 status code", async () => {
    const response = await request(app).get("/products").send();
    expect(response.statusCode).toBe(200);
  });

  test("should respond with an array of products", async () => {
    const response = await request(app).get("/products").send();
    expect(Array.isArray(response.body.data)).toBe(true);
  });

  test("should contain at least one product", async () => {
    const response = await request(app).get("/products").send();
    expect(response.body.data.length).toBeGreaterThan(0);
  });

  test("each product should have required properties", async () => {
    const response = await request(app).get("/products").send();
    const product = response.body.data[0];

    expect(product).toHaveProperty("_id");
    expect(product).toHaveProperty("name");
    expect(product).toHaveProperty("description");
    expect(product).toHaveProperty("price");
    expect(product).toHaveProperty("stock");
    expect(product).toHaveProperty("imageUrl");
    expect(product).toHaveProperty("createdAt");
  });
});

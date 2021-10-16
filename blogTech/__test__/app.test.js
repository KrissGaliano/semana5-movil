import request from "supertest";
import { app } from "../api/app";
import { base_url } from "../config/config";

const bearer =
  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InBlcGl0b0BnbWFpbC5jb20iLCJwYXNzd29yZCI6InBlcGl0bzEyMzQ1NiIsImlhdCI6MTYzMDU5NTkxNH0.O9Xz7lgpXHmCf2VP0H3v0WonpdABmdxvEJm2q8hixtQ";

// Primer test voy a listar a los usuarios
describe("Lista de usuarios", () => {
  test("Metodo GET", async () => {
    const result = await request(app)
      .get(`${base_url}/user/users`)
      .set("Authorization", bearer);

    expect(result.status).toBe(200);
    expect(result.ok).toBe(true);
  });
});

// Ahora vamos a crear un usuario
describe("Creación usuario", () => {
  test("Metodo POST", async () => {
    const body = {
      name: "Linder Test",
      last_name: "Hassinger Test",
      email: "linder@gmail.com",
      password: "linder123456",
    };

    const result = await request(app)
      .post(`${base_url}/auth/signUp`)
      .send(body);

    expect(result.status).toBe(201);
    expect(result.ok).toBe(true);
  });
});

// Delete
describe("Metodo Delete", () => {
  test("Eliminacióon de Usuario POO", async () => {
    const result = await request(app)
      .delete(`${base_url}/user/destroy/POO`)
      .set("Authorization", bearer);

    expect(result.status).toBe(200);
    expect(result.ok).toBe(true);
  });
  test("Eliminación del usuario L3HS", async () => {
    const result = await request(app)
      .delete(`${base_url}/user/destroy/L3HS`)
      .set("Authorization", bearer);

    expect(result.status).toBe(200);
    expect(result.ok).toBe(true);
  });
});

//UPDATE
describe("Metodo Put", () => {
  test("Update", async () => {
    const body = {
      
      name: "Linder Test",
      last_name: "Hassinger Test",
      email: "linder@gmail.com",
      password: "linder123456",
    };

    const result = await request(app)
      .put(`${base_url}/user/update/POO`)
      .set("Authorization", bearer)
      .send(body);

    expect(result.status).toBe(200);
    expect(result.ok).toBe(true);
  });
});
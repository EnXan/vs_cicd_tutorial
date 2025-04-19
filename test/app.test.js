const request = require("supertest");
const app = require("../app");

describe("Docker CI/CD Demo App", () => {
  // Test für den API-Endpunkt
  test("GET /api/status sollte JSON mit Statusdaten zurückgeben", async () => {
    const response = await request(app).get("/api/status");
    expect(response.statusCode).toBe(200);
    expect(response.headers["content-type"]).toMatch(/json/);
    expect(response.body).toHaveProperty("status");
    expect(response.body).toHaveProperty("container");
    expect(response.body).toHaveProperty("timestamp");
  });

  // Teste einen nicht existierenden Endpunkt
  test("GET /nicht-vorhanden sollte 404 zurückgeben", async () => {
    const response = await request(app).get("/nicht-vorhanden");
    expect(response.statusCode).toBe(404);
  });
});

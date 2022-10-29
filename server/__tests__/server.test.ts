const request = require("supertest");

// this is http://localhost:3000   <<< precisely this
const server = require("../server");

describe("POST /auth/login", () => {
  describe("when the password is missing", () => {
    // respond with status code 400 because user error
    test("should return a 400 status code", async () => {
      const response = await request(server).post("/auth/login").send({
        email: "test1@test.com",
      });
      expect(response.statusCode).toBe(400);
    });
  });
});

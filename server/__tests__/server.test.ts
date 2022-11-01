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

  describe('when the username is missing', () => {
    // respond with status code 400 because user error
    test('should return a 400 status code', async () => {
      const response = await request(server).post('/auth/login').send({
        password: 'test',
      });
      expect(response.statusCode).toBe(400);
    });
  });

  describe('given a username and password', () => {
    //should save username and password to database
    // should respond with a json object containing the user id

    // should respond with 200 status code
    test('should respond with 200 status code', async () => {
      const response = await request(server)
        .post('/auth/login')
        .send({
          username: `test1@test.com
          `,
          password: `test1_pw
          `,
        });
      expect(response.statusCode).toBe(200);
    });
    // should specify json in the content type header
  });

});


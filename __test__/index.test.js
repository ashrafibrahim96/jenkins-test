const request= require("supertest")
const app=require("../index")

describe("Get route", () => {
    it("page should return gamouda kalb ", async () => {
      const res = await request(app).get("/");
      expect(res.statusCode).toEqual(200);
      expect(res.body).toEqual("gamouda kalb");
    });
  });

afterAll(async () => {
    await app.close();
});
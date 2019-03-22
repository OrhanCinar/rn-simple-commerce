var rest = require("rest");
var mime = require("rest/interceptor/mime");
var client = rest.wrap(mime, { mime: "application/json" });

test("Test Login", async () => {
  return client({
    path: "http://localhost:5000/login",
    method: "POST",
    entity: { userName: "Test user", password: "Test password" }
  }).then(response => {
    expect(response).toBeDefined();
    expect(response.entity.data.status).toEqual("OK");
    expect(response.entity.data.message).toEqual("User Found");
  });
});

test("Test Register", async () => {
  return client({
    path: "http://localhost:5000/register",
    method: "POST",
    entity: { userName: "Test user", password: "Test password" }
  }).then(response => {
    expect(response).toBeDefined();
    expect(response.entity.data.status).toEqual("OK");
    expect(response.entity.data.message).toEqual("User Registered");
  });
});

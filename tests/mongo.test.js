//github.com/cujojs/rest/blob/master/docs/interceptors.md

var rest = require("rest");
var mime = require("rest/interceptor/mime");
var client = rest.wrap(mime, { mime: "application/json" });

test("Server Test", async () => {
  return client({ path: "http://localhost:5000/" }).then(response => {
    //console.log("Log", response.status.code);
    expect(response).toBeDefined();
    expect(response.entity.data.status).toEqual("OK");
  });
});

test("Get Products", async () => {
  return client({ path: "http://localhost:5000/products" }).then(response => {
    expect(response).toBeDefined();
    expect(response.entity.data.status).toEqual("OK");
  });
});

test("Get Single Product", async () => {
  return client({
    path: "http://localhost:5000/product/5c82fa4a5e22815492646456"
  }).then(response => {
    expect(response).toBeDefined();
    expect(response.entity.data.status).toEqual("OK");
    expect(response.entity.data.product._id).not.toBe("");
  });
});

test("Get Cart", async () => {
  return client({ path: "http://localhost:5000/cart" }).then(response => {
    expect(response).toBeDefined();
    expect(response.entity.data.status).toEqual("OK");
  });
});

test("Test Categories", async () => {
  return client({ path: "http://localhost:5000/category" }).then(response => {
    expect(response).toBeDefined();
    expect(response.entity.data.status).toEqual("OK");
  });
});

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

var rest, mime, client;

(rest = require("rest")), (mime = require("rest/interceptor/mime"));
client = rest.wrap(mime);

test("Server Test", async () => {
  return client({ path: "http://localhost:5000/" }).then(response => {
    //console.log("Log", response.status.code);
    expect(response).toBeDefined();
    expect(response.entity.data.status).toEqual("OK");
  });
});

test("Test Products", async () => {
  return client({ path: "http://localhost:5000/products" }).then(response => {
    expect(response).toBeDefined();
    expect(response.entity.data.status).toEqual("OK");
  });
});

test("Test Single Product", async () => {
  return client({
    path: "http://localhost:5000/product/5c82fa4a5e22815492646456"
  }).then(response => {
    expect(response).toBeDefined();
    expect(response.entity.data.status).toEqual("OK");
    expect(response.entity.data.product._id).not.toBe("");
  });
});

test("Test Cart", async () => {
  return client({ path: "http://localhost:5000/cart" }).then(response => {
    expect(response).toBeDefined();
    expect(response.entity.data.status).toEqual("OK");
  });
});

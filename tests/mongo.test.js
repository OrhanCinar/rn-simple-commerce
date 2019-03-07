import { sendGetRequest, sendPostRequest } from "./httpModule";

test("test url", async () => {
  const data = await sendGetRequest("http://www.google.com");
  return expect(data).not.toBe("");
});

test("Test Mongo Products url", async () => {
  const data = await sendGetRequest("http://localhost:5000/");
  return expect(data).not.toBe("");
});

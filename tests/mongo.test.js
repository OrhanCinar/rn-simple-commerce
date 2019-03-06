import sendGetRequest from "./httpModule";

test("test url", async () => {
  const data = await sendGetRequest("http://www.google.com");
  return expect(data).not.toBe("");
});

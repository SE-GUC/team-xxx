const functions = require("../functions/Meetings.functions");
test("3.3 : As a partner I should be  able to accept schdeule negotitation meeting /decline consultant's plan", async () => {
  expect.assertions(2);
  const response = await functions.createmeeting();
  expect(response.status).toEqual(200);
  expect(Array.isArray(response.data)).toBe(false);
});
test("7.5 : As a life coach or member I should be accept/decline/suggest a meeting location", async () => {
  expect.assertions(2);
  const response = await functions.suggestloc();
  expect(response.data.msg).toEqual("Meeting updated successfully");
  expect(Array.isArray(response.data)).toBe(false);
});
test("3.4 : As a consultatnt I should be able to accept meeting arrangement or withdraw from the project", async () => {
  expect.assertions(2);
  const response = await functions.suggestloc();
  expect(response.data.msg).toEqual("Meeting updated successfully");
  expect(Array.isArray(response.data)).toBe(false);
});

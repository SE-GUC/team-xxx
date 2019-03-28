const functions = require("../functions/Meetings.functions");

//2.1 is made also with this 
test("3.3 : As a partner I should be  able to accept schdeule negotitation meeting /decline consultant's plan", async () => {
  expect.assertions(2);
  const response = await functions.createmeeting();
  expect(response.status).toEqual(200);
  expect(Array.isArray(response.data)).toBe(false);
});


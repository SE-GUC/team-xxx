const functions = require("../functions/Members.functions");

test("6.12 : As a user I should be able to to show my certficates and masterclasses", async () => {
  expect.assertions(2);
  const response = await functions.getmasterclasses();
  expect(response.data[1].masterclasses).toEqual("photographee");
  expect(Array.isArray(response.data)).toBe(true);
});

test("6.1 : As a user I should be able to to show my attended events", async () => {
  expect.assertions(2);
  const response = await functions.getevents();
  expect(response.data).toEqual("beyonds");
  expect(Array.isArray(response.data)).toBe(false);
});

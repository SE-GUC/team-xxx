const functions = require("../functions/Partners.functions");

test("6.5,6.2", async () => {
  expect.assertions(2);
  const response = await functions.getprofile();
  const schema = {
    _id: "5c7438ea6fcfc31a036229df",
    business: "123",
    partners: "zero",
    boardmembers: "loloo",
    events: "bataaa",
    field: "yoyooo",
    projects: "kokooo",
    feedback: "yayaaa",
    __v: 0,
    Email: "jggggd@hhhh.bb",
    Password: "jgaaaaa"
  };
  expect(response.data).toEqual(schema);
  expect(Array.isArray(response.data)).toBe(false);
});
test("6.6 : As a user i should see the signed contracnt and the validity of the membership", async () => {
  expect.assertions(2);
  const response = await functions.getmembership();
  const schema = "2002-02-01T22:00:00.000Z";

  expect(response.data).toEqual(schema);
  expect(Array.isArray(response.data)).toBe(false);
});
test("6.6 : As a user i should see the signed contracnt and the validity of the membership", async () => {
  expect.assertions(2);
  const response = await functions.getcontract();
  const schema = "valied";

  expect(response.data).toEqual(schema);
  expect(Array.isArray(response.data)).toBe(false);
});

test("6.1 : As a user i should be able to show my attended events", async () => {
  expect.assertions(2);
  const response = await functions.getevents();
  const schema = "flag";

  expect(response.data).toEqual(schema);
  expect(Array.isArray(response.data)).toBe(false);
});
test("6.9 : As a partner I should be able to view past projects/suggest feedback", async () => {
  expect.assertions(2);
  const response = await functions.getprojects();
  const schema = "xxx";

  expect(response.data).toEqual(schema);
  expect(Array.isArray(response.data)).toBe(false);
});
test("6.9 : As a partner I should be able to view past projects/suggest feedback", async () => {
  expect.assertions(2);
  const response = await functions.getfeedback();
  const schema = "yes";
  expect(response.data).toEqual(schema);
  expect(Array.isArray(response.data)).toBe(false);
});

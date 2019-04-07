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
test("6.5 : As a user I should be able to to show my profile", async () => {
  expect.assertions(2);
  const response = await functions.getprofile();
  const schema = {
    Contracts: [],
    Email: "claudia@gmail.com",
    Notifications: [],
    Password: "masra7masr123",
    RecommendedTasks: [],
    Weekly_Schedule: "jjjjz",
    __v: 0,
    _id: "5c7695b4a00a7805764b3193",
    age: 21,
    events: ["beyond"],
    interests: ["Ballet"],
    masterclasses: ["photograph"],
    name: "123",
    oldProjects: [],
    projects: [],
    reviews: ["reviews"],
    skills: ["sales"],
    tasks: ["tasks"]
  };
  expect(response.data).toEqual(schema);
  expect(Array.isArray(response.data)).toBe(false);
});
test("6.6 : As a user i should see the signed contracnt and the validity of the membership", async () => {
  expect.assertions(2);
  const response = await functions.getmembership();
  const schema = "2008-12-31T22:00:00.000Z";
  expect(response.data).toEqual(schema);
  expect(Array.isArray(response.data)).toBe(false);
});
test("6.6 : As a user i should see the signed contracnt and the validity of the membership", async () => {
  expect.assertions(2);
  const response = await functions.getcontract();
  const schema = "signed";
  expect(response.data).toEqual(schema);
  expect(Array.isArray(response.data)).toBe(false);
});
test("6.1 : As a user i should be able to show my attended events", async () => {
  expect.assertions(2);
  const response = await functions.getevents();
  const schema = "beyonds";
  expect(response.data).toEqual(schema);
  expect(Array.isArray(response.data)).toBe(false);
});

test("6.4	As a user I should be able to show my notifcations", async () => {
  expect.assertions(2);
  const response = await functions.getnotificatons();
  expect(response.data).toEqual("gggg");
  expect(Array.isArray(response.data)).toBe(false);
});

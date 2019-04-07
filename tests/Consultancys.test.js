const functions = require("../functions/Consultancys.functions");
test("6.5,6.7", async () => {
  expect.assertions(2);
  const response = await functions.getprofile();
  const schema = {
    Contracts: ["new"],
    Email: "new2.shazly15@gmail.com",
    Lifecoach: true,
    Notifications: ["new"],
    Password: "1234",
    ReviewOwner: "new",
    Reviews: ["new"],
    Submission: ["new"],
    __v: 0,
    _id: "5c90e01b0bfb1a24f4cbd44c",
    boardmembers: ["new2"],
    business: ["new2"],
    events: ["new2"],
    membership: "2002-02-01T22:00:00.000Z",
    partners: ["new2"],
    projects: ["new"],
    reports: ["new2"]
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
  const schema = ["new"];
  expect(response.data).toEqual(schema);
  expect(Array.isArray(response.data)).toBe(false);
});
test("6.1 : As a user i should be able to show my attended events", async () => {
  expect.assertions(2);
  const response = await functions.getevents();
  const schema = ["ahmed"];
  expect(response.data).toEqual(schema);
  expect(Array.isArray(response.data)).toBe(false);
});
test("6.4 As a user(Consultant) I should be able to show my notifcations", async () => {
  expect.assertions(2);
  const response = await functions.getConsnotificatons();
  expect(response.data).toEqual(["nnnj"]);
  expect(Array.isArray(response.data)).toBe(false);
});

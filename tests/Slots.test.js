const functions = require("../functions/Slots.functions");
test("7.3 : As a life coach I shold be able to view updated schedule ", async () => {
  expect.assertions(2);
  const response = await functions.getSchedule();
  const schema = {
    status: "booked",
    _id: "5c9036ad4983e415d453d311",
    lifecoachEmail: "ahmed@gmail.com",
    number: "2001-01-31T22:00:00.000Z",
    Date: "2000-02-01T22:00:00.000Z",
    startTime: "2000-02-01T22:00:00.000Z",
    endTime: "2000-02-01T22:00:00.000Z",
    applicant: "ahmed@gmail.com",
    Location: "ahmed",
    __v: 0
  };
  expect(response.data).toEqual(schema);
  expect(Array.isArray(response.data)).toBe(false);
});
test("7.3 : As a life coach I shold be able to view updated schedule ", async () => {
  expect.assertions(2);
  expect.extend({
    toContainObject(received, argument) {
      const pass = this.equals(
        received,
        expect.arrayContaining([expect.objectContaining(argument)])
      );
      if (pass) {
        return {
          message: () =>
            `expected ${this.utils.printReceived(
              received
            )} not to contain object ${this.utils.printExpected(argument)}`,
          pass: true
        };
      } else {
        return {
          message: () =>
            `expected ${this.utils.printReceived(
              received
            )} to contain object ${this.utils.printExpected(argument)}`,
          pass: false
        };
      }
    }
  });
  const response = await functions.getfreeslots();
  expect(response.data).toContainObject({ status: "Free" });
  expect(Array.isArray(response.data)).toBe(true);
});

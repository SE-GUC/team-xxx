
const functions = require("../functions/Consultancys.functions");
test("6.4 As a user(Consultant) I should be able to show my notifcations", async () => {
    expect.assertions(2);
    const response = await functions.getConsnotificatons();
    expect(response.data).toEqual("nnnj");
    expect(Array.isArray(response.data)).toBe(false);
  });
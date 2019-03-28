const functions = require("../functions/Partners.functions");
test("6.4	As a user(partner) I should be able to show my notifcations", async () => {
    expect.assertions(2);
    const response = await functions.getpartnernotificatons();
    expect(response.data).toEqual("notiiii");
    expect(Array.isArray(response.data)).toBe(false);
  });
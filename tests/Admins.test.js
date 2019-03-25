const functions = require("../functions/Admins.functions");

const nameCheck = () => console.log("Checking Name....");

test("test", async () => {
  expect.assertions(1);
  const response = await functions.getAdmins();
  expect(response.data.Email).toEqual("update2@gmail.net");
});

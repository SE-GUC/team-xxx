const functions = require("../functions/Admins.functions");

const nameCheck = () => console.log("Checking Name....");

test("test", async () => {
  expect.assertions(1);
  const response = await functions.getAdmins();
  expect(response.data.Email).toEqual("update2@gmail.net");
});
test("As an admin I should be able to access the description posted by the partner", async () => {
    expect.assertions(1);
    const response = await functions.getDescriptionForAdmin();
    expect(response.data).toEqual("asd");
  });

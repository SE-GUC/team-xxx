const functions = require("../functions/Projects.functions");

test("1.2 : As an admin I should be able to access the description posted by the partner", async () => {
  expect.assertions(2);
  const response = await functions.getDescriptionForAdmin();
  expect(response.data).toEqual("asd");
  expect(Array.isArray(response.data)).toBe(false);
});

test("4.1 : As a candidate I should be  able to view and search all posted tasks and view recommended tasks", async () => {
  expect.assertions(2);
  const response = await functions.getprojects();
  const schema = {
    consultancyAcceptance: false,
    _id: "5c91000d484fd72a3330eed5",
    Title: "asd",
    description: "description2",
    candidates: "candidates2",
    effort: "effort2",
    duration: "duration2",
    commitment: "commitment2",
    experience: "experience2",
    compensation: "compensation2",
    partner: "partner2",
    skills: "skills2",
    consultancy: "consultancy2",
    category: "2",
    state: "state2",
    applicants: "applicants2",
    assigned: "assigned2",
    extraInfo: "extraInfo2",
    Consultant: false,
    consultantRandom: false,
    memberWork: "memberWork2",
    __v: 0
  };
  expect(response.data[1]).toEqual(schema);
  expect(Array.isArray(response.data)).toBe(true);
});
test("4.1 : As a candidate I should be  able to view and search all posted tasks and view recommended tasks", async () => {
  expect.assertions(2);
  const response = await functions.searchprojects();
  expect(response.data.commitment).toEqual("commitment2");
  expect(Array.isArray(response.data)).toBe(false);
});

test("1.3 : As a partner I should be able to choose categories and enter extra attributes for each category ", async () => {
  expect.assertions(2);
  const response = await functions.updateCategoryAndInfo();
  const schema = {
    consultancyAcceptance: false,
    _id: "5c7aa93aa8f0f42afbe8fa3b",
    Title: null,
    description: null,
    candidates: "2",
    effort: "effort2",
    duration: "duration2",
    commitment: "commitment2",
    experience: "experience2",
    compensation: "compensation2",
    partner: "partner2",
    skills: "skills2",
    consultancy: "consultancy2",
    category: "combutar",
    state: "state2",
    applicants: "applicants2",
    assigned: "don5",
    extraInfo: "msh combutar awi",
    Consultant: false,
    consultantRandom: false,
    memberWork: "memberWork2",
    __v: 0
  };
  expect(response.data).toEqual(schema);
  expect(Array.isArray(response.data)).toBe(false);
});

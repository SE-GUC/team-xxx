const functions = require("../functions/Projects.functions");

test("1.2 : As an admin I should be able to access the description posted by the partner", async () => {
  expect.assertions(2);
  const response = await functions.getDescriptionForAdmin();
  expect(response.data).toEqual(null);
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

test("6.11 : As a user I should be able to to show my completed projects and reviews received and by whom ", async () => {
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
  const response = await functions.getprojectsforuser();
  expect(response.data).toContainObject({ assigned: "assigned2" });
  expect(Array.isArray(response.data)).toBe(true);
});

test("4.3 : As an admin I should be able to choose the freelancer that would be assigned ", async () => {
  expect.assertions(2);
  const response = await functions.assignmember();
  expect(response.data.assigned).toEqual("don5");
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
    consultancy: "testtest",
    category: "combutar",
    state: "state2",
    applicants: "applicants2",
    assigned: "don5",
    extraInfo: "msh combutar awi",
    Consultant: false,
    consultantRandom: false,
    memberWork: "memberWork122",
    __v: 0
  };
  expect(response.data).toEqual(schema);
  expect(Array.isArray(response.data)).toBe(false);
});
test("3.3 : As a partner I should be  able to accept schdeule negotitation meeting /decline consultant's plan ", async () => {
  expect.assertions(2);
  const response = await functions.getresponse();
  expect(response.data.consultancyAcceptance).toEqual(false);
  expect(Array.isArray(response.data)).toBe(false);
});
test("3.2 : As a partner I should be able to choose a specific consultant", async () => {
  expect.assertions(2);
  const response = await functions.chooseConsultant();
  expect(response.data.consultancy).toEqual("testtest");
  expect(Array.isArray(response.data)).toBe(false);
});
test("2.2 : As a partner I should be able to accept to arrange a meeting / cancel project", async () => {
  expect.assertions(2);
  const response = await functions.decproject();
  expect(response.data.state).toEqual("declined");
  expect(Array.isArray(response.data)).toBe(false);
});
test("1.1 : As a partner I should be able to submit description of project/task", async () => {
  expect.assertions(4);
  const response = await functions.submitdesc();
  expect(response.status).toEqual(200);
  expect(response.data.Title).toEqual("aaaaaa");
  expect(response.data.description).toEqual("aaaaaa");
  expect(Array.isArray(response.data)).toBe(false);
});
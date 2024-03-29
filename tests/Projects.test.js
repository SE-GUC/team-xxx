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
    Title: "aaaaaa",
    __v: 0,
    _id: "5c9b5f51aee46b2f27d99bbf",
    applicants: [],
    candidates: [],
    consultancyAcceptance: false,
    description: "aaaaaa",
    skills: []
  };
  expect(response.data[1]).toEqual(schema);
  expect(Array.isArray(response.data)).toBe(true);
});
test("4.1 : As a candidate I should be  able to view and search all posted tasks and view recommended tasks", async () => {
  expect.assertions(2);
  const response = await functions.searchprojects();
  const schema = {
    Title: null,
    __v: 0,
    _id: "5ca8b3ba7c26e63ac8e9c41a",
    applicants: [],
    assigned: "don5",
    candidates: [],
    category: "combutar",
    compensation: "compensation",
    consultancy: "testtest",
    consultancyAcceptance: false,
    description: null,
    detaileddescription: "moresdetails",
    detailedplan: "moresdetails",
    extraInfo: "extraInfonewnew",
    memberWork: "memberWork1222",
    skills: []
  };
  expect(response.data).toEqual(schema);
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
  expect(response.data).toEqual([]);
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
    Title: null,
    __v: 0,
    _id: "5ca8b3ba7c26e63ac8e9c41a",
    applicants: [],
    assigned: "don5",
    candidates: [],
    category: "combutar",
    compensation: "compensation",
    consultancy: "testtest",
    consultancyAcceptance: false,
    description: null,
    detaileddescription: "moresdetails",
    detailedplan: "moresdetails",
    extraInfo: "extraInfonewnew",
    memberWork: "memberWork1222",
    skills: []
  };
  expect(response.data).toEqual(schema);
  expect(Array.isArray(response.data)).toBe(false);
});
test("3.3 : As a partner I should be  able to accept schdeule negotitation meeting /decline consultant's plan ", async () => {
  expect.assertions(2);
  const response = await functions.getresponse();
  expect(response.data.msg).toEqual("Project updated successfully");
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
  expect(response.data.msg).toEqual("Project updated successfully");
  expect(Array.isArray(response.data)).toBe(false);
});
test("1.1 : As a partner I should be able to submit description of project/task", async () => {
  expect.assertions(2);
  const response = await functions.submitdesc();
  expect(response.status).toEqual(200);
  expect(Array.isArray(response.data)).toBe(false);
});
test("5.2 : As a contributor I should be able to view the project progress bar ", async () => {
  expect.assertions(2);
  const response = await functions.getstate();
  expect(response.data).toEqual("");
  expect(Array.isArray(response.data)).toBe(false);
});
//2.4 : As a partner I should be able to choose to have a consultant or not
test("2.3 : As a partner I should be able to define project required skills with a set of attributes (Time, skills, etc…..) ", async () => {
  expect.assertions(2);
  const response = await functions.defineatt();
  expect(response.data.msg).toEqual("Project updated successfully");
  expect(Array.isArray(response.data)).toBe(false);
});

test("5.1/5.3	As a consulant/partner I should be  able to  propose edits for the freelancer's work ", async () => {
  expect.assertions(2);
  const response = await functions.proposeMemWork();
  expect(response.data.msg).toEqual("Project updated successfully");
  expect(Array.isArray(response.data)).toBe(false);
});
test("4.4 : As an accepted candidate I should be able to get a notification and an orientation for the task", async () => {
  expect.assertions(2);
  const response = await functions.getOrientationOfTasks();
  expect(response.data).toEqual("");
  expect(Array.isArray(response.data)).toBe(false);
});
test("2.5 : As a partner I should be able to provide detailed description in case of no consulatancy", async () => {
  expect.assertions(2);
  const response = await functions.detaileddescriptions();
  expect(response.data.detaileddescription).toEqual("moresdetails");
  expect(Array.isArray(response.data)).toBe(false);
});
test("3.1 : As a choosen consultant I should be able to accept the project by submitting a detailed plan or reject", async () => {
  expect.assertions(2);
  const response = await functions.detailedplan();
  expect(response.data.detaileddescription).toEqual("moresdetails");
  expect(Array.isArray(response.data)).toBe(false);
});

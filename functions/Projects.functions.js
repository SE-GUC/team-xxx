const axios = require("axios");
axios.defaults.adapter = require("axios/lib/adapters/http");
const functions = {
  getDescriptionForAdmin: async () => {
    const Description = await axios
      .get(
        "http://localhost:5000/api/Projects/5ca8b3ba7c26e63ac8e9c41a/description"
      )
      .catch(err => "error");
    return Description;
  },
  getprojects: async () => {
    const Projects = await axios
      .get("http://localhost:5000/api/Projects/")
      .catch(err => "error");
    return Projects;
  },
  searchprojects: async () => {
    const Projects = await axios
      .get("http://localhost:5000/api/Projects/5ca8b3ba7c26e63ac8e9c41a")
      .catch(err => "error");
    return Projects;
  },
  getprojectsforuser: async () => {
    const projects = await axios
      .get("http://localhost:5000/api/projects/projects//")
      .catch(err => "error");
    return projects;
  },
  assignmember: async () => {
    const updateSchema = {
      assigned: "don5"
    };
    const member = axios.put(
      "http://localhost:5000/api/projects/assign/5ca8b3ba7c26e63ac8e9c41a",
      updateSchema
    );
    return member;
  },
  updateCategoryAndInfo: async () => {
    const updateSchema = {
      category: "combutar",
      extraInfo: "msh combutar awi"
    };
    const updatedCategoryAndInfo = axios.put(
      "http://localhost:5000/api/Projects/updateCatAndInfo/5ca8b3ba7c26e63ac8e9c41a",
      updateSchema
    );
    return updatedCategoryAndInfo;
  },
  getresponse: async () => {
    const updateSchema = {
      consultancyAcceptance: false
    };
    const assigned = axios.put(
      "http://localhost:5000/api/projects/5ca8b3ba7c26e63ac8e9c41a",
      updateSchema
    );
    return assigned;
  },
  chooseConsultant: async () => {
    const updateSchema = {
      consultancy: "testtest"
    };
    const chooseConsultant = axios.put(
      "http://localhost:5000/api/Projects/chooseConsultant/5ca8b3ba7c26e63ac8e9c41a",
      updateSchema
    );
    return chooseConsultant;
  },
  decproject: async () => {
    const updateSchema = {
      state: "declined"
    };
    const providedesc = axios.put(
      "http://localhost:5000/api/Projects/declineproject/5ca8b3ba7c26e63ac8e9c41a",
      updateSchema
    );
    return providedesc;
  },
  submitdesc: async () => {
    const updateSchema = {
      Title: "testingg",
      description: "mmmm1mm"
    };
    const descfirst = axios.post(
      "http://localhost:5000/api/projects/",
      updateSchema
    );
    return descfirst;
  },
  getstate: async () => {
    const State = await axios
      .get("http://localhost:5000/api/Projects/5ca8b3ba7c26e63ac8e9c41a/state")
      .catch(err => "error");
    return State;
  },
  decproject: async () => {
    const updateSchema = {
      extraInfo: "extraInfonewnew"
    };
    const providedesc = axios.put(
      "http://localhost:5000/api/Projects/5ca8b3ba7c26e63ac8e9c41a",
      updateSchema
    );
    return providedesc;
  },
  proposeMemWork: async () => {
    const updateSchema = {
      memberWork: "memberWork1222"
    };
    const memberWorkk = axios.put(
      "http://localhost:5000/api/Projects/5ca8b3ba7c26e63ac8e9c41a",
      updateSchema
    );
    return memberWorkk;
  },
  defineatt: async () => {
    const updateSchema = {
      compensation: "compensation"
    };
    const memberWorkk = axios.put(
      "http://localhost:5000/api/Projects/5ca8b3ba7c26e63ac8e9c41a",
      updateSchema
    );
    return memberWorkk;
  },
  getOrientationOfTasks: async () => {
    const OrientationOfTasks = await axios
      .get(
        "http://localhost:5000/api/Projects/5ca8b3ba7c26e63ac8e9c41a/OrientaionForTheTask"
      )
      .catch(err => "error");
    return OrientationOfTasks;
  },
  detaileddescriptions: async () => {
    const updateSchema = {
      detaileddescription: "moresdetails"
    };
    const providedesc = axios.put(
      "http://localhost:5000/api/Projects/descc/5ca8b3ba7c26e63ac8e9c41a",
      updateSchema
    );
    return providedesc;
  },
  detailedplan: async () => {
    const updateSchema = {
      detailedplan: "moresdetails"
    };
    const providedesc = axios.put(
      "http://localhost:5000/api/Projects/plandet/5ca8b3ba7c26e63ac8e9c41a",
      updateSchema
    );
    return providedesc;
  }
};

module.exports = functions;

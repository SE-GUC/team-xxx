const axios = require("axios");
axios.defaults.adapter = require("axios/lib/adapters/http");
const functions = {
  getDescriptionForAdmin: async () => {
    const Description = await axios
      .get(
        "http://localhost:5000/api/Projects/5c7aa93aa8f0f42afbe8fa3b/description"
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
      .get("http://localhost:5000/api/Projects/5c7aa93aa8f0f42afbe8fa3b")
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
      "http://localhost:5000/api/projects/assign/5c7aa93aa8f0f42afbe8fa3b",
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
      "http://localhost:5000/api/Projects/updateCatAndInfo/5c7aa93aa8f0f42afbe8fa3b",
      updateSchema
    );
    return updatedCategoryAndInfo;
  },
  getresponse: async () => {
    const updateSchema = {
      consultancyAcceptance: false
    };
    const assigned = axios.put(
      "http://localhost:5000/api/projects/getresponse/5c7aa93aa8f0f42afbe8fa3b",
      updateSchema
    );
    return assigned;
  },
  chooseConsultant: async () => {
    const updateSchema = {
      consultancy: "testtest"
    };
    const chooseConsultant = axios.put(
      "http://localhost:5000/api/Projects/chooseConsultant/5c7aa93aa8f0f42afbe8fa3b",
      updateSchema
    );
    return chooseConsultant;
  },
  decproject: async () => {
    const updateSchema = {
      state: "declined"
    };
    const providedesc = axios.put(
      "http://localhost:5000/api/Projects/declineproject/5c7aa93aa8f0f42afbe8fa3b",
      updateSchema
    );
    return providedesc;
  },
  submitdesc: async () => {
    const updateSchema = {
      Title: "mmmmmm",
      description: "mmmmmm"
    };
    const descfirst = axios.post(
      "http://localhost:5000/api/projects/",
      updateSchema
    );
    return descfirst;
  },
  getstate: async () => {
    const State = await axios
      .get("http://localhost:5000/api/Projects/5c7aa93aa8f0f42afbe8fa3b/state")
      .catch(err => "error");
    return State;
  }
};

module.exports = functions;

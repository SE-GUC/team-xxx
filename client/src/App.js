import { BrowserRouter as Router, Route } from "react-router-dom";
import Notifications from "./components/Notifications";
import AppNavbar from "./components/AppNavbar";
import Lifecoach from "./components/Lifecoach";
import "bootstrap/dist/css/bootstrap.min.css";
import Projects from "./components/Projects";
import React, { Component } from "react";
import About from "./components/About";
import Home from "./components/home";
import AddProject from "./components/AddProject";
import Project from "./components/Project";
import AddSlot from "./components/AddSlot";
import Search from "./components/Search";
import EditProject from "./components/EditProject";
import EditSlot from "./components/EditSlot";
import Slot from "./components/Slot";
import Profile from "./components/Profile";
import {
  loadAdmin,
  loadPartner,
  loadConsultancy,
  loadMember
} from "./actions/authActions";
import "./App.css";

import { Provider } from "react-redux";
import store from "./store";
class App extends Component {
  componentDidMount() {
    store.dispatch(loadAdmin());
    store.dispatch(loadPartner());
    store.dispatch(loadConsultancy());
    store.dispatch(loadMember());
  }
  render() {
    return (
      <Router>
        <Provider store={store}>
          <div>
            <AppNavbar />
            <Route exact path="/" component={Home} />
            <Route path="/Search/:query" component={Search} />
            <Route path="/home" component={Home} />
            <Route path="/EditSlot/:id" component={EditSlot} />
            <Route path="/Slot/:id" component={Slot} />
            <Route path="/about" component={About} />
            <Route path="/Projects" component={Projects} />
            <Route path="/Lifecoach" component={Lifecoach} />
            <Route path="/Notifications" component={Notifications} />
            <Route path="/AddProject" component={AddProject} />
            <Route path="/Project/:id" component={Project} />
            <Route path="/AddSlot" component={AddSlot} />
            <Route path="/EditProject/:id" component={EditProject} />
            <Route path="/Profile" component={Profile} />
          </div>
        </Provider>
      </Router>
    );
  }
}

export default App;

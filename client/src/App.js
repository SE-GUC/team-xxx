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
import Booking from "./components/Booking";
import "./App.css";

import { Provider } from "react-redux";
import store from "./store";
class App extends Component {
  render() {
    return (
      <Router>
        <Provider store={store}>
          <div>
            <AppNavbar />
            <Route exact path="/" component={Home} />
            <Route path="/Search/:query" component={Search} />
            <Route path="/home" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/Projects" component={Projects} />
            <Route path="/Lifecoach" component={Lifecoach} />
            <Route path="/Notifications" component={Notifications} />
            <Route path="/AddProject" component={AddProject} />
            <Route path="/Project/:id" component={Project} />
            <Route path="/AddSlot" component={AddSlot} />
            <Route path="/Booking" component={Booking} />
          </div>
        </Provider>
      </Router>
    );
  }
}

export default App;

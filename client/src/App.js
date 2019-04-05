import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import AppNavbar from "./components/AppNavbar";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Projects from "./components/Projects";
import Lifecoach from "./components/Lifecoach";
import Notifications from "./components/Notifications";
import home from "./components/home";
import About from "./components/About";

import { Provider } from "react-redux";
import store from "./store";
class App extends Component {
  render() {
    return (
      <Router>
        <Provider store={store}>
          <div>
            <AppNavbar />
            <Route path="/home" component={home} />
            <Route path="/about" component={About} />
            <Route path="/Projects" component={Projects} />
            <Route path="/Lifecoach" component={Lifecoach} />
            <Route path="/Notifications" component={Notifications} />
          </div>
        </Provider>
      </Router>
    );
  }
}

export default App;

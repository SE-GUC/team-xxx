import { BrowserRouter as Router, Route } from "react-router-dom";
import Notifications from "./components/Notifications";
import AppNavbar from "./components/AppNavbar";
import Lifecoach from "./components/Lifecoach";
import "bootstrap/dist/css/bootstrap.min.css";
import Projects from "./components/Projects";
import React, { Component } from "react";
import About from "./components/About";
import home from "./components/home";
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

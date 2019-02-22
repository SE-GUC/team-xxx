import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './Login.css';
import AppointmentApp from "./AppointmentApp";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";

class LifeCoaching extends Component {
    render() {
        
        return (
            <div>
            <MuiThemeProvider>
              <AppointmentApp />
            </MuiThemeProvider>
          </div>
        );
      }
}
export default LifeCoaching;
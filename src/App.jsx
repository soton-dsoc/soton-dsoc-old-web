import React from "react"; 
import { BrowserRouter as Router } from "react-router-dom";
import  WelcomeScreenComponent  from "./components/WelcomeScreen";
import 'bootstrap/dist/css/bootstrap.min.css';
import AboutScreenComponent from "./components/AboutScreen";
import EventsScreenComponent from "./components/EventScreen";

class App extends React.Component {
  render() {
    return (
      <Router>
        <WelcomeScreenComponent />
        <AboutScreenComponent />
        <EventsScreenComponent />
      </Router>
    );
  }
}

export default App;
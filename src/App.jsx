import React from "react"; 
import { BrowserRouter as Router } from "react-router-dom";
import  WelcomeScreenComponent  from "./components/WelcomeScreen";
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {
  render() {
    return (
      <Router>
        <WelcomeScreenComponent />
      </Router>
    );
  }
}

export default App;
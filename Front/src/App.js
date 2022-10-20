import logo from "./logo.svg";
import "./App.css";
import Home from "./components/Home/Home";
import Footer from "./components/Footer";
import { Component } from "react/cjs/react.production.min";
import { useState } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { apiResponse: "" };
  }

  callAPI() {
    fetch("http://localhost:9000/testAPI")
      .then((res) => res.text())
      .then((res) => this.setState({ apiResponse: res }));
  }

  componentWillMount() {
    this.callAPI();
  }

  render() {
    return (
      <div className="App">
        <Home />
        <Footer />
        <p className="App-intro">;{this.state.apiResponse}</p>
      </div>
    );
  }
}
export default App;

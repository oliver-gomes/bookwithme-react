import React, { Component } from "react";
import Header from "./shared/Header";
import "./App.css";

import RentalList from "./components/rental/RentalList";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />

        <div className="container">
          <RentalList />
        </div>
      </div>
    );
  }
}

export default App;

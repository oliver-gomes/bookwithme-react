import React, { Component } from "react";
import Header from "./shared/Header";
import "./App.css";
import RentalCard from "./components/RentalCard";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />

        <div className="container">
          <section id="rentalListing">
            <h1 className="page-title">Your Home All Around the World</h1>
            <div className="row">
              <RentalCard />
              <RentalCard />
              <RentalCard />
            </div>
          </section>
        </div>
      </div>
    );
  }
}

export default App;

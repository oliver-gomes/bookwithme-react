import React from "react";
import RentalCard from "./RentalCard";

export default class RentalList extends React.Component {
  state = {
    rentals: [1, 2, 3]
  };

  renderRentals() {
    return this.state.rentals.map((rental, index) => {
      return <RentalCard key={index} colNum="col-md-6 col-xs-6" />;
    });
  }

  addRental = () => {
    const rentals = this.state.rentals;
    rentals.push(1);

    this.setState({
      rentals
    });
  };

  render() {
    return (
      <section id="rentalListing">
        <h1 className="page-title">Your Home All Around the World</h1>
        <div className="row">{this.renderRentals()}</div>
        <button onClick={this.addRental}> Add Rental! </button>
      </section>
    );
  }
}

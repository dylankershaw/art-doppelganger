import { connect } from "react-redux";
import React, { Component } from "react";

import { seedImage } from "../actions";

class SeedContainer extends Component {
  constructor() {
    super();

    this.state = {
      seedValue: "",
    };
  }

  handleSeedChange = ev => {
    this.setState({ seedValue: ev.target.value });
  };

  handleSeedSubmit = ev => {
    ev.preventDefault();
    this.props.seedImage(this.state.seedValue);
    this.setState({ seedValue: "" });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSeedSubmit}>
          <label>CLOUDINARY & KAIROS SEED INPUT (url)</label>
          <input
            value={this.state.seedValue}
            onChange={this.handleSeedChange}
          />
        </form>
        <br />
        <br />
      </div>
    );
  }
}

export default connect(null, { seedImage })(
  SeedContainer
);

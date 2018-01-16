import { connect } from "react-redux";
import Webcam from "react-webcam";
import React, { Component } from "react";

import { seedImage } from "../actions";

class SeedContainer extends Component {
  constructor() {
    super();

    this.state = {
      seedValue: ""
    };
  }

  handleChange = ev => {
    this.setState({ seedValue: ev.target.value });
  };

  handleSubmit = ev => {
    ev.preventDefault();
    this.props.seedImage(this.state.seedValue);
    this.setState({ seedValue: "" });
  };

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>TAKE PHOTO</button>
        <form onSubmit={this.handleSubmit}>
          <label>SEED INPUT</label>
          <input value={this.state.seedValue} onChange={this.handleChange} />
        </form>
      </div>
    );
  }
}

export default connect(null, { seedImage })(SeedContainer);

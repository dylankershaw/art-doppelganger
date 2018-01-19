import { connect } from "react-redux";
import React, { Component } from "react";

import { authenticateArtsy, seedImage } from "../actions";

class SeedContainer extends Component {
  constructor() {
    super();

    this.state = {
      seedValue: "",
      artsyValue: ""
    };
  }

  componentDidMount() {
    this.props.authenticateArtsy();
  }

  handleSeedChange = ev => {
    this.setState({ seedValue: ev.target.value });
  };

  handleSeedSubmit = ev => {
    ev.preventDefault();
    this.props.seedImage(this.state.seedValue);
    this.setState({ seedValue: "" });
  };

  handleArtsyChange = ev => {
    this.setState({ artsyValue: ev.target.value });
  };

  handleArtsySubmit = ev => {
    ev.preventDefault();
    console.log(this.props.artsy);
    // this.props.seedImage(this.state.seedValue);
    this.setState({ artsyValue: "" });
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
        <form onSubmit={this.handleArtsySubmit}>
          <label>ARTSY SHOW INPUT</label>
          <input
            value={this.state.artsyValue}
            onChange={this.handleArtsyChange}
          />
        </form>
      </div>
    );
  }
}

function mapStateToProps({ artsy }) {
  return { artsy };
}

export default connect(mapStateToProps, { seedImage, authenticateArtsy })(
  SeedContainer
);

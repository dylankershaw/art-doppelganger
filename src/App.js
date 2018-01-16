import React, { Component } from "react";

import WebcamContainer from "./components/webcam_container";
import SeedContainer from "./components/seed_container";

class App extends Component {
  render() {
    return (
      <div>
        <WebcamContainer />
        <SeedContainer />
      </div>
    );
  }
}

export default App;

import React, { Component } from "react";

import DoppelgangerContainer from './components/doppelganger_container'
import WebcamContainer from "./components/webcam_container";
import SeedContainer from "./components/seed_container";

class App extends Component {
  render() {
    return (
      <div>
        <WebcamContainer />
        <SeedContainer />
        <DoppelgangerContainer />
      </div>
    );
  }
}

export default App;

import { connect } from "react-redux";
import Webcam from "react-webcam";
import React, { Component } from "react";

import { getDogpelganger } from "../actions";

class WebcamContainer extends Component {
  handleClick = () => {
    const screenshot = this.webcam.getScreenshot();
    this.props.getDogpelganger(screenshot);
  };

  render() {
    return (
      <div>
        <Webcam
          audio={false}
          ref={node => (this.webcam = node)}
          screenshotFormat="image/jpeg"
          height="10"
        />
        <button onClick={this.handleClick}>TAKE PHOTO</button>
      </div>
    );
  }
}

export default connect(null, { getDogpelganger })(WebcamContainer);

import { connect } from "react-redux";
import Webcam from "react-webcam";
import React from "react";

import { getDogpelganger } from "../actions";

const WebcamContainer = ({ getDogpelganger }) => {
  const handleClick = () => {
    const screenshot = this.webcam.getScreenshot();
    getDogpelganger(screenshot);
  };

  return (
    <div>
      <Webcam
        audio={false}
        ref={node => (this.webcam = node)}
        screenshotFormat="image/jpeg"
        height="300"
      />
      <button onClick={handleClick}>TAKE PHOTO</button>
    </div>
  );
};

export default connect(null, { getDogpelganger })(WebcamContainer);

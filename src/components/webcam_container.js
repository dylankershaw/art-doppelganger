import React from "react";
import Webcam from "react-webcam";

const WebcamContainer = () => {
  return (
    <div>
      <Webcam
        audio={false}
        ref={node => (this.webcam = node)}
        screenshotFormat="image/jpeg"
        height="300"
      />
    </div>
  );
};

export default WebcamContainer;

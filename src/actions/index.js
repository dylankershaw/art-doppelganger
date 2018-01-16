import * as apiHelpers from "../api";

export const SET_DOPPELGANGER = "SET_DOPPELGANGER";
export const SET_ARTSY_TOKEN = "SET_ARTSY_TOKEN";
export const SET_HUMAN = "SET_HUMAN";

//// KAIROS ////

export function getDoppelganger(img) {
  return function(dispatch) {
    apiHelpers
      .recognize(img)
      .then(resp => console.log(resp.images[0].candidates[0].subject_id));
    // set this subject_id to store so its image can be pulled from cloudinary
  };
}

export function seedImage(img) {
  return function(dispatch) {
    apiHelpers.enrollImage(img).then(resp => console.log(resp));
  };
}

//// ARTSY ////

export function authenticateArtsy() {
  return function(dispatch) {
    apiHelpers.getArtsyToken().then(resp => {
      return dispatch({
        type: SET_ARTSY_TOKEN,
        payload: resp.token
      });
    });
  };
}

import * as apiHelpers from "../api";

export const SET_ARTSY_TOKEN = "SET_ARTSY_TOKEN";
export const SET_HUMAN = "SET_HUMAN";

export function getDoppelganger(img) {
  return function(dispatch) {
    apiHelpers.recognize(img).then(resp => console.log(resp));
  };
}

export function seedImage(img) {
  return function(dispatch) {
    apiHelpers.enrollImage(img).then(resp => console.log(resp));
  };
}

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

import * as apiHelpers from "../api";

export const SET_DOPPELGANGER = "SET_DOPPELGANGER";
export const SET_ARTSY_TOKEN = "SET_ARTSY_TOKEN";
export const SET_HUMAN = "SET_HUMAN";

//// SEEDS ////

// uploads to cloudinary and enrolls to kairos
export function seedImage(img) {
  return function (dispatch) {
    apiHelpers.cloudinaryUploader(img)
      // enrolls image to kairos with cloudinary url id
      .then(resp => apiHelpers.enrollImage(img, resp.url.split("/upload/")[1])
        .then(resp => console.log(resp)))
  };
}

export function authenticateArtsy() {
  return function (dispatch) {
    apiHelpers.getArtsyToken().then(resp => {
      return dispatch({
        type: SET_ARTSY_TOKEN,
        payload: resp.token
      });
    });
  };
}

//// DOPPELGANGER ////

export function getDoppelganger(img) {
  return function (dispatch) {
    apiHelpers
      .recognize(img)
      // set this subject_id to store so its image can be pulled from cloudinary
      .then(resp => setDoppelganger(resp.images[0].candidates[0].subject_id));
  };
}

export function setDoppelganger(id) {
  return function (dispatch) {
    return dispatch({
      type: SET_DOPPELGANGER,
      payload: "http://res.cloudinary.com/dkershaw/image/upload/" + id
    })
  }
}
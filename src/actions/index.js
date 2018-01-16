import * as apiHelpers from "../api";

export const SET_HUMAN = "SET_HUMAN";
export const SET_DOG = "SET_DOG";

export function getDogpelganger(img) {
  return function(dispatch) {
    apiHelpers.recognize(img).then(resp => console.log(resp));
  };
}

export function seedImage(img) {
  return function(dispatch) {
    apiHelpers.enrollImage(img).then(resp => console.log(resp));
  };
}

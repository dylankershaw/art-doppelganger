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

// sends screenshot to kairos then sets it to store
export function getDoppelganger(img) {
  return function (dispatch) {
    apiHelpers.recognize(img).then(resp => {
      if (resp.images && resp.images[0].candidates) {
        const subjectId = resp.images[0].candidates[0].subject_id

        apiHelpers.getSubject(subjectId)
          .then(resp => {
            console.log(resp)
            return dispatch({
              type: SET_DOPPELGANGER,
              payload: { url: "http://res.cloudinary.com/dkershaw/image/upload/" + subjectId }
            })
          })
      } else {
        console.log("no doppelganger found")
      }
    })
  };
}
import cloudinary from "cloudinary";

//// CLOUDINARY ////

export function cloudinaryUploader(img) {
  return cloudinary.v2.uploader.unsigned_upload(
    img,
    "art-doppelganger-unsigned",
    {
      cloud_name: "dkershaw"
    },
    function (error, result) {
      return result;
    }
  );
}

//// KAIROS ////

const headers = {
  app_id: "e8f3158e",
  app_key: "4ea59d811ef35b9d747f233d4ab6db11",
  "Content-Type": "application/json"
};

export function recognize(img) {
  console.log("recognizing img")
  return fetch("https://api.kairos.com/recognize", {
    headers: headers,
    method: "POST",
    body: JSON.stringify({
      image: img,
      gallery_name: "Paintings",
      threshold: 0.1
    })
  }).then(res => res.json());
}

// enrolls image with the id returned by cloudinary
export function enrollImage(img, id) {
  return fetch("https://api.kairos.com/enroll", {
    headers: headers,
    method: "POST",
    body: JSON.stringify({
      image: img,
      subject_id: id,
      gallery_name: "Paintings"
    })
  }).then(res => res.json());
}

// gets subject from kairos
export function getSubject(id) {
  console.log("fetching subject", id)
  return fetch("https://api.kairos.com/gallery/view_subject", {
    headers: headers,
    method: "POST",
    gallery_name: "Paintings",
    subject_id: id
  }).then(res => res.json())
}
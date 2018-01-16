const headers = {
  app_id: "e8f3158e",
  app_key: "4ea59d811ef35b9d747f233d4ab6db11",
  "Content-Type": "application/json"
};

export function recognize(img) {
  return fetch("https://api.kairos.com/recognize", {
    headers: headers,
    method: "POST",
    body: JSON.stringify({ image: img, gallery_name: "Dogs" })
  }).then(res => res.json());
}

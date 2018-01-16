//// KAIROS ////

const headers = {
  app_id: "e8f3158e",
  app_key: "4ea59d811ef35b9d747f233d4ab6db11",
  "Content-Type": "application/json"
};

export function recognize(img) {
  return fetch("https://api.kairos.com/recognize", {
    headers: headers,
    method: "POST",
    body: JSON.stringify({
      image: img,
      gallery_name: "Paintings",
      threshold: 0.3
    })
  }).then(res => res.json());
}

export function enrollImage(img) {
  return fetch("https://api.kairos.com/enroll", {
    headers: headers,
    method: "POST",
    body: JSON.stringify({
      image: img,
      subject_id: Date.now(),
      gallery_name: "Paintings"
    })
  }).then(res => res.json());
}

//// ARTSY ////

export function getArtsyToken() {
  return fetch("https://api.artsy.net/api/tokens/xapp_token", {
    method: "POST",
    body: JSON.stringify({
      client_id: "d0bfd4fee4de4539f4ad",
      client_secret: "86818d55193775149b3f977cad6fa521"
    })
  }).then(res => res.json());
}

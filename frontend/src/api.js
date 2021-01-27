const validateStatusCode = response =>
  new Promise((resolve, reject) => {
    const status = response.status;
    const next = status < 400 ? resolve : reject;
    response.text().then(next);
  });

export const makePrediction = image =>
  fetch("http://127.0.0.1:5000/api/predict", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ image })
  }).then(validateStatusCode);
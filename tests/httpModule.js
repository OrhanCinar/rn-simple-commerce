const http = require("http");

function sendGetRequest(url) {
  return new Promise(resolve => {
    http.get({ path: url }, response => {
      let data = "";
      response.on("data", _data => (data += _data));
      response.on("end", () => resolve(data));
    });
  });
}

function sendPostRequest(url) {
  return new Promise(resolve => {
    http.request({ path: url }, response => {
      let data = "";
      response.on("data", _data => (data += _data));
      response.on("end", () => resolve(data));
    });
  });
}

module.exports = { sendGetRequest, sendPostRequest };

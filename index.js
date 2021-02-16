const fetch = require("node-fetch");
const url = "https://dev.fractal-it.fr:8443/fake_health_test?dynamic=true ";
var ok = 0;
var error = 0;
const getData = async (url) => {
  try {
    const response = await fetch(url);
    const json = await response.json();
    if (json.status === "ok") {
      ok++;
      error = 0;
    }
    if (ok === 1) {
      console.log("status à de nouveau ok");
    }
    if (json.status === "error") {
      error++;
      ok = 0;
    }
    if (error === 31) {
      console.log("status à error depuis au moins 30 sec");
    }
  } catch (error) {
    console.log(error);
  }
};
setInterval(function () {
  getData(url);
}, 1000);

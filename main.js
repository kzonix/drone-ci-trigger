const core = require('@actions/core');
const delay = 1000 // default delay to check status of build
const timeout = 60000 // stop check

let main = function ({ url, apiToken, repo }) {
  return new Promise((resolve) => {
    setTimeout(() => resolve("done!"), 500)
  });
};

module.exports = main;

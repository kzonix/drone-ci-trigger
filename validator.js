const core = require('@actions/core');

let validator = function ({ url, apiToken, repo }) {
  return new Promise((resolve) => {
    if (typeof milliseconds !== 'number') {
      throw new Error('milliseconds not a number');
    }
    setTimeout(() => resolve("done!"), milliseconds)
  });
};

module.exports = validator;

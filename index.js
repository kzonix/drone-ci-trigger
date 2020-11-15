const core = require('@actions/core');
const { context } = require('@actions/github');
const main = require('./main.js');
const validator = require('./validator.js');

async function run() {
  try {
    const apiUrl = core.getInput('droneApiUrl');
    const apiToken = core.getInput('droneApiToken');

    const payload = JSON.stringify(github.context.payload, undefined, 2)
    console.log(`The event payload: ${payload}`);

    const ctx = JSON.stringify(github.context, undefined, 2)
    console.log(`The event payload: ${ctx}`);

    core.debug((new Date()).toTimeString()); // debug is only output if you set the secret `ACTIONS_RUNNER_DEBUG` to true
    //await main(parseInt(ms));
    core.info((new Date()).toTimeString());

    core.setOutput('time', new Date().toTimeString());
  } catch (error) {
    core.setFailed(error.message);
  }
}

run();

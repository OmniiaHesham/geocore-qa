const path = require("path");
require("dotenv").config({ path: path.resolve(__dirname, ".env") });
const { defineConfig } = require("cypress");

const geocoreUsername = process.env.GEOCORE_USERNAME || "";
const geocorePassword = process.env.GEOCORE_PASSWORD || "";

module.exports = defineConfig({
  video: false,
  reporter: "cypress-multi-reporters",
  reporterOptions: {
    reporterEnabled: "cypress-qase-reporter",
    cypressQaseReporterReporterOptions: {
      mode: "testops",
      debug: true,
      testops: {
        api: {
          token: process.env.QASE_API_TOKEN || "",
        },
        project: "GEOCORE",
        uploadAttachments: true,
        run: {
          complete: true,
        },
      },
      framework: {
        cypress: {
          screenshotsFolder: "cypress/screenshots",
        },
      },
    },
  },
  e2e: {
    baseUrl: "https://geocore.test.geotech.build/",
    env: {
      geocoreUsername,
      geocorePassword,
    },
    fixturesFolder: "cypress/fixtures",
    supportFile: "cypress/support/e2e.js",
    downloadsFolder: "cypress/downloads",
    screenshotsFolder: "cypress/screenshots",
    videosFolder: "cypress/videos",
>>>>>>> 6caa142 (Put upload data set data in a json file)
    viewportWidth: 1440,
    viewportHeight: 900,
    chromeWebSecurity: false,
    defaultCommandTimeout: 10000,
    pageLoadTimeout: 30000,
    requestTimeout: 30000,
    includeShadowDom: true,
    ensureScrollable: false,
    setupNodeEvents(on, config) {
      require("cypress-qase-reporter/plugin")(on, config);
      require("cypress-qase-reporter/metadata")(on);
      return config;
    },
  },
});

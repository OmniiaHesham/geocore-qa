const { defineConfig } = require('cypress');

module.exports = defineConfig({
  video: false,
  reporter: 'cypress-multi-reporters',
  reporterOptions: {
    reporterEnabled: 'cypress-qase-reporter',
    cypressQaseReporterReporterOptions: {
      mode: "testops",
      debug: true,
      testops: {
        api: {
          token: "6f6170e8d3436053690fc4f9323df9aa0b9514fa27d0110f0e4f2c7de44df1a0",
        },
        project: "GEOCORE",
        uploadAttachments: true,
        run: {
          complete: true,
        },
      },
      framework: {
        cypress: {
          screenshotsFolder: 'cypress/screenshots',
        }
      }
    }
  },

  e2e: {
    baseUrl: "https://geocore.dev.geotech.build/",
    viewportWidth: 1440,
    viewportHeight: 900,
    chromeWebSecurity: false,
    defaultCommandTimeout: 10000,
    pageLoadTimeout: 30000,
    requestTimeout: 30000,
    includeShadowDom: true,
    ensureScrollable: false,

    setupNodeEvents(on, config) {
      require('cypress-qase-reporter/plugin')(on, config);
      require('cypress-qase-reporter/metadata')(on);
    },
  },
});

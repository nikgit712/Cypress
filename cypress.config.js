const { defineConfig } = require('cypress')

module.exports = defineConfig({
  viewportWidth: 1200,
  viewportHeight: 1200,
  defaultCommandTimeout: 10000, 
  pageLoadTimeout:10000,
  chromeWebSecurity: false,
  env: {
    baseTestUser: {
      username: 'ascent.team.testing@gmail.com',
      password: 'Ascenttesting123!',
      fullName: 'Paula Danika',
    },
    createAccountUser: {
      password: 'Password123!',
      firstName: 'Qa',
      lastName: 'Test',
    },
    happyPathSoloBorrower: {
      firstName: 'Isabel',
      lastName: 'Marines',
      ssn: '666686490',
      streetAddress: '11881 Townsite Rd',
      city: 'Alta Vista',
      zipcode: '66834-9194',
      phoneNumber: '9876543210',
      birthdate: '01021999',
      mortgage: '1000',
      income: '75000',
      employer: 'Ascent',
      job: 'QA',
      loanAmount: '10000',
    },
    happyPathCosignedBorrower: {
      firstName: 'Jose',
      lastName: 'Cruz',
      ssn: '666584321',
      streetAddress: '512 Washington St',
      city: 'Marshall',
      zipcode: '49068-1672',
      phoneNumber: '9876543210',
      birthdate: '01142000',
      income: '25000',
      employer: 'Ascent',
      job: 'QA',
      loanAmount: '10000',
    },
    happyPathLoanOffersUser: {
      email: 'jdeason+isabel.marines@ascentfunding.com',
      password: 'Password123!'
    },
    cypressPluginSnapshots: {
      autoCleanUp: false,            // Automatically remove snapshots that are not used by test
      autopassNewSnapshots: true,    // Automatically save & pass new/non-existing snapshots
      diffLines: 3,                  // How many lines to include in the diff modal
      excludeFields: [],             // Array of fieldnames that should be excluded from snapshot
      ignoreExtraArrayItems: false,  // Ignore if there are extra array items in result
      ignoreExtraFields: false,      // Ignore extra fields that are not in `snapshot`
      normalizeJson: true,           // Alphabetically sort keys in JSON
      prettier: true,                // Enable `prettier` for formatting HTML before comparison
      imageConfig: {
        createDiffImage: true,       // Should a "diff image" be created, can be disabled for performance
        ResizeDevicePixelRatio: true,// Resize image to base resolution when Cypress is running on high DPI screen, `cypress run` always runs on base resolution
        threshold: 0.01,             // Amount in pixels or percentage before snapshot image is invalid
        thresholdType: 'percent'     // Can be either "pixels" or "percent"
      },
      screenshotConfig: {            // See https://docs.cypress.io/api/commands/screenshot.html#Arguments
        blackout: [],
        capture: 'fullPage',
        clip: null,
        disableTimersAndAnimations: true,
        log: false,
        scale: false,
        timeout: 30000
      },
      serverEnabled: true,           // Enable "update snapshot" server and button in diff modal
      serverHost: 'localhost',       // Hostname for "update snapshot server"
      serverPort: 2121,              // Port number for  "update snapshot server"
      updateSnapshots: false,        // Automatically update snapshots, useful if you have lots of changes
      backgroundBlend: 'difference'  // background-blend-mode for diff image, useful to switch to "overlay"
    }
  },
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    supportFile: false,
    // specPattern: 'e2e/*.cy.{js,jsx,ts,tsx}',
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
    },
    baseUrl: 'http://college-qa-external.ascentfunding.com/login',
  },
})

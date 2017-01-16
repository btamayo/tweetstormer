/**
 * Created by bianca on 1/15/17.
 */
const jasmineReporters = require('jasmine-reporters');

let outputFolder = process.env.CIRCLE_TEST_REPORTS ? `${process.env.CIRCLE_TEST_REPORTS}/junit/` : './.test-results/';

jasmine.VERBOSE = true;
jasmine.getEnv().addReporter(
  new jasmineReporters.JUnitXmlReporter({
    consolidateAll: true,
    savePath: outputFolder,
    filePrefix: "test-results"
  })
);
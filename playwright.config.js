// playwright.config.js
module.exports = {
  testDir: 'tests', // the root directory of your tests
  timeout: 30000, // global timeout
  projects: [
    {
      name: 'Core',
      testDir: 'tests/core',
      timeout: 60000,
    },
    {
      name: 'insuree',
      testDir: 'tests/insuree', // the directory for Insuree
      timeout: 50000, // specific timeout for Insuree
    },
  ],
};


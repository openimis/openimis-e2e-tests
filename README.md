# End-to-End Testing with Playwright

This project uses Playwright as a proof of concept for end-to-end testing of openIMIS web application.

## Project Setup

Setup openIMIS: Local execution of tests using playwright requires openIMIS frontend running on `localhost:3000`

Install Playwright: Install Playwright using `npm install`

Run Tests: Use `npx playwright test` to confirm that project was setup coreclty. 

## Test Structure
The tests are organized in a hierarchical structure inside the tests directory:

    tests: The root directory of your tests.
        core: Contains tests for Core.
            login.test.js: Test file for validating login functionality.
        insuree: Contains tests for Insuree.
            // No tests added so far


## Writing Tests
Playwright Codegen tool can be used to generate boilerplate code for user interactions like clicks, form inputs, and navigation. Here's how you run codegen:

```bash
npx playwright codegen
```

Assertions for code have to be added manually.
Example content of playwright test:
```javascript

const { test, expect } = require('@playwright/test');

test('some test', async ({ page }) => {
  await page.goto('http://localhost:3000/login');
  await page.fill('#username', 'your_username');
  await page.fill('#password', 'your_password');
  await page.click('#submit');

  // add an assertion
  const pageTextContent = await page.textContent('body');
  expect(pageTextContent).toContain('Welcome Admin Admin!');
});
```

## Running Tests
Tests by executing the following command:

```bash
npx playwright test
```
Tests also can be run from a specific module:

```bash
npx playwright test tests/core
```

Or using a specific configuration: 
```bash
npx playwright test --config playwright.config.js
```


## CI/CD Integration
This repository could be used in frontend module workflows as a base for test execution. For the time being no integrations running in existing CI/CD pipelines.  
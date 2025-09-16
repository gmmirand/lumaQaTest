# lumaQaTest

---

## Test - Locally and Mocha via GitHub Actions

<img width="770" height="756" alt="image" src="https://github.com/user-attachments/assets/5ad4b3d9-5e48-4a8c-96ee-d2b2a9ca7b58" />

<img width="1429" height="416" alt="image" src="https://github.com/user-attachments/assets/ab8d0752-6f8e-44bc-882b-b01dd5ea9141" />

---

## Overview

This project automates end-to-end and API tests for [DemoQA](https://demoqa.com) using **Cypress**, **TypeScript**, and **Cucumber (Gherkin)**. The goal is to ensure UI and API quality through maintainable, scalable, and readable test code, with full CI/CD integration.

---

## Project Structure

```
cypress/
  api/                        # API tests and helpers
  downloads/                  # Files downloaded during tests
  e2e/
    features/                 # .feature files (BDD), organized by area
      alertsFrameWindows/
      elements/
      widgets/
    pages/                    # Page Objects, organized by area
      alertsFrameWindows/
      elements/
      widgets/
      mainPage.ts
    step_definitions/         # Step definitions for Gherkin scenarios
      alertsFrameWindows/
      elements/
      widgets/
      API.steps.ts
      common.steps.ts
  fixtures/                   # Test data and support files
  reports/                    # Test execution reports (Mochawesome)
  screenshots/                # Test failure evidence
  support/                    # Custom commands and global config
    commands.ts
    e2e.ts
    index.d.ts
```

---

## Technologies Used

- [Cypress](https://www.cypress.io/) (end-to-end testing)
- [Cucumber](https://github.com/badeball/cypress-cucumber-preprocessor) (BDD)
- [TypeScript](https://www.typescriptlang.org/) (static typing)
- [Mochawesome](https://github.com/adamgruber/mochawesome) (reporting)
- [Node.js](https://nodejs.org/)
- **GitHub Actions** (CI/CD)

---

## Setup Instructions

### 1. Prerequisites

- Node.js (>= 16.x)
- npm (>= 8.x) or yarn

### 2. Installation

Clone the repository and install dependencies:

```sh
git clone <repo-url>
cd lumaQaTest
npm install
```

### 3. Running the Tests Locally

#### Run all tests in headless mode:
```sh
npx cypress run
```

#### Run tests with the Cypress GUI:
```sh
npx cypress open
```

#### View Mochawesome report:
After running the tests, open:
```
cypress/reports/mochawesome.html
```

---

## CI/CD with GitHub Actions

This project includes a GitHub Actions workflow to automatically install dependencies, run all tests, and generate reports on every push and pull request.

**Workflow file:** `.github/workflows/ci.yml`

```yaml
# filepath: .github/workflows/ci.yml
name: CI

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:
  cypress-run:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout code
        uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: 18

      - name: Install dependencies
        run: npm ci

      - name: Run Cypress tests
        run: npx cypress run

      - name: Upload Mochawesome Report
        if: always()
        uses: actions/upload-artifact@v4
        with:
          name: mochawesome-report
          path: cypress/reports/
```

After each run, the Mochawesome report will be available as a downloadable artifact in the GitHub Actions summary.

---

## Test Organization

- **Features:** Each system feature has a `.feature` file describing scenarios in natural language.
- **Pages:** Each system page has a Page Object, centralizing selectors and actions.
- **Step Definitions:** Steps for `.feature` scenarios are implemented in `.steps.ts` files, organized by area.
- **Fixtures:** Support data and files for upload/download.
- **Reports/Screenshots:** Execution reports and evidence.

---

## Design Decisions & Assumptions

- **Modular Organization:** Tests are divided by system area (widgets, elements, alertsFrameWindows) for maintainability and scalability.
- **Page Object Model:** Used to centralize selectors and actions, avoiding duplication and easing updates.
- **Selectors Abstraction:** All selectors are abstracted in Page Object files for maintainability.
- **Highly Parameterized Steps:** Step definitions are written to be reusable and parameterized.
- **BDD:** Cucumber is adopted to make scenarios readable for both technical and non-technical stakeholders.
- **Mochawesome Reports:** For easy analysis and troubleshooting.
- **Assumption:** The test environment is stable and DemoQA data can be manipulated freely.
- **Assumption:** The project will be run locally or in CI with Node.js installed.

---

## How to Add New Tests

1. Create a new `.feature` file in the appropriate folder under `cypress/e2e/features/`.
2. Implement the steps in a new `.steps.ts` file under `cypress/e2e/step_definitions/`.
3. If needed, create or update the Page Object in `cypress/e2e/pages/`.
4. Run the tests to ensure everything works.

---

## Questions or Issues?

Open an issue or contact the repository maintainer.

---

**Bonus Features Implemented:**
- Mochawesome reporter for test results.
- All selectors abstracted in Page Objects.
- Highly parameterized step definitions for reusability.

---
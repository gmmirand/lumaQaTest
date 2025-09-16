# Luma QA Test Automation

![Cypress Tests](https://github.com/gmmirand/lumaQaTest/actions/workflows/cypress.yml/badge.svg)

---
## 1. Overview

Automation suite covering UI ([DemoQA](https://demoqa.com/)) and API ([Restful API](https://restful-api.dev/)) validations, built with Cypress + TypeScript + Cucumber (BDD).

UI: Page Object Model for maintainable interactions, Gherkin steps for readability, validations on key workflows (e.g., Web Tables, Alerts).

API: CRUD tests with reusable, parameterized steps and assertions on status codes + payloads.

Reports: Unified with Mochawesome, including screenshots on failure.

CI/CD: Runs on every push/PR to main, ensuring fast feedback and preventing regressions.

## Techs Used
- [Cypress](https://www.cypress.io/) – End-to-End & API testing
- [TypeScript](https://www.typescriptlang.org/) – Static typing
- [Cucumber](https://cucumber.io/) – BDD with Gherkin
- [Mochawesome](https://github.com/adamgruber/mochawesome) – Test reporting
- [Node.js](https://nodejs.org/) – Runtime
- [GitHub Actions](https://docs.github.com/actions) – CI/CD pipeline

---

## 2. Process & Approach

| Aspect | Summary |
|--------|---------|
| Planning | Split scope into UI (component interactions) + API (CRUD baseline). Started with API to validate framework wiring, then layered UI features. |
| Architecture | Structured by domain: `features` (behavior), `step_definitions`, `pages` (selectors & actions), `support` (global config). |
| Reuse | Centralized selectors in Page Objects; generic step patterns for HTTP verbs and UI interactions. |
| Stability | Added retries (`runMode: 2`) and modest timeouts to reduce false negatives due to external demo site variability. |
| Reporting | Chose Mochawesome for fast integration + JSON merge → single HTML artifact. |
| CI Strategy | Separate UI and API executions inside one workflow to keep clarity of failures and merge reports afterward. |
| Maintainability | Favor small, declarative feature files; isolate DOM details away from Gherkin. |
| Reviewability | README emphasizes setup → run → extend, plus explicit assumptions & design notes for evaluators. |

---

## 3. Project Structure (Essential View)

```
cypress/
  api/
    features/            # API .feature files
  e2e/
    features/            # UI .feature files grouped by domain
    pages/               # Page Objects (selectors + actions)
    step_definitions/    # UI & shared steps
  fixtures/              # Test data / static assets
  reports/               # Mochawesome output (JSON + merged HTML)
  screenshots/           # Captured on failures
  support/               # Commands + global hooks
.github/workflows/
  cypress.yml            # CI pipeline
cypress.config.ts        # Cypress + Cucumber integration
.cypress-cucumber-preprocessorrc.json
```

---

## 4. Setup Requirements

| Requirement | Version / Note |
|-------------|----------------|
| Node.js | >= 18 (CI uses 22) |
| npm | >= 8 |
| OS | macOS / Linux / Windows |
| Browsers | Chrome (headless in CI) |

---

## 5. Installation

```bash
git clone git@github.com:gmmirand/lumaQaTest.git
cd lumaQaTest
npm install
```

> or `npm ci` to ensures a clean, lockfile-faithful install (same as CI).

---

## 6. Running the Tests (Local)

| Goal | Command |
|------|---------|
| All tests (UI + API) | `npx cypress run` |
| UI only | `npx cypress run --spec "cypress/e2e/features/**/*.feature"` |
| API only | `npx cypress run --spec "cypress/api/features/**/*.feature"` |
| Specific feature | `npx cypress run --spec "cypress/e2e/features/elements/<file>.feature"` |
| Interactive mode (GUI) | `npx cypress open` |
| Override baseUrl (temporary) | `npx cypress run --config baseUrl=https://demoqa.com` |

Report (merged HTML) path after CI or manual merge:  
`cypress/reports/merged/mochawesome.html`

---

## 7. Reporting

- Each test batch produces Mochawesome JSON.
- CI merges all JSON → single `mochawesome.html` (inline assets).
- Artifacts (report + screenshots) are attached to the workflow run.
- Local viewing (macOS example):
  ```bash
  open cypress/reports/merged/mochawesome.html
  ```

---

## 8. CI Pipeline (GitHub Actions)

Workflow: [.github/workflows/cypress.yml](./.github/workflows/cypress.yml)

Steps:
1. Checkout & Node setup
2. Install dependencies (`npm ci`)
3. Run UI tests (Chrome headless)
4. Run API tests
5. Merge Mochawesome JSON → HTML
6. Upload artifacts (report, screenshots, videos if enabled)

Triggered on: push / pull_request targeting `main`.

---

## 9. Design Decisions & Assumptions

| Decision / Assumption | Rationale |
|-----------------------|-----------|
| Page Object Model | Centralizes selectors & UI actions for easier maintenance. |
| Parameterized Steps | Reduce duplication: a single pattern handles different endpoints/fields. |
| Retries (`runMode: 2`) | Mitigate transient network/demo site fluctuations. |
| Mochawesome reporter | Quick setup + merged summary artifact for evaluators. |
| Higher default timeouts | Offset potential latency of public demo environments. |
| Independent scenarios | No test relies on artifacts created by prior scenarios (improves reliability). |
| Data creation on-demand in API tests | Ensures clean isolation (create → update/delete within same scenario). |

---

## 10. Adding a New Test (Minimal Steps)

1. Create a `.feature` file under the correct domain folder (UI or API).
2. Reuse existing step definitions if possible.
3. If a new UI component: add methods/selectors in a Page Object.
4. Run the single spec:
   ```bash
   npx cypress run --spec "cypress/e2e/features/<domain>/new.feature"
   ```
5. Check report & artifacts.

---

## 11. Evidence (Current Passing State)

All tests passing (terminal):

<img width="555" height="737" alt="All tests passing (terminal)" src="https://github.com/user-attachments/assets/9884f57c-b3d4-481f-a625-30137b3c3f2d" />

Mochawesome merged report:

<img width="1429" height="416" alt="Mochawesome merged report" src="https://github.com/user-attachments/assets/ab8d0752-6f8e-44bc-882b-b01dd5ea9141" />

---

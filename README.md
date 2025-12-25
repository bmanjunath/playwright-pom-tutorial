# Playwright POM Tutorial (Node.js + TypeScript)

This project demonstrates **Playwright automation using the Page Object Model (POM)** with **Node.js and TypeScript**.  
It is designed for **beginners** to easily set up, run, and understand Playwright tests after cloning the project.

---

## Prerequisites

Make sure the following are installed on your system.

### 1. Install Node.js
Download and install the **LTS version** from:
https://nodejs.org

Verify installation:
```bash
node -v
npm -v
````

---

### 2. Install Git

Download Git from:
[https://git-scm.com/downloads](https://git-scm.com/downloads)

Verify installation:

```bash
git --version
```

---

## Clone the Repository

```bash
git clone https://github.com/bmanjunath/playwright-pom-tutorial.git
cd playwright-pom-tutorial
```

---

## Install Dependencies

Install all required project dependencies:

```bash
npm install
```

---

## Install Playwright Browsers

Playwright requires browser binaries to run tests.

```bash
npx playwright install
```

(Optional – recommended for macOS/Linux)

```bash
npx playwright install-deps
```


## Run Tests

### Run all tests

```bash
npx playwright test
```

### Run tests in headed mode (see browser)

```bash
npx playwright test --headed
```

### Run a specific test file

```bash
npx playwright test tests/testAutomation.spec.ts
```

---

## View Test Report

After execution, view the Playwright HTML report:

```bash
npx playwright show-report
```

---

## Project Structure

```text
playwright-pom-tutorial
│
├── pages/               # Page Object classes
├── fixtures/            # Playwright fixtures
├── tests/               # Test specifications
├── utils/               # Utility and env loader files
├── env/
│   └── .env.example     # Sample environment variables
├── playwright.config.ts
├── package.json
└── README.md
```

---

## Key Concepts Used

* Playwright Test Runner
* Page Object Model (POM)
* Fixtures
* Environment-based configuration
* TypeScript

---

## Beginner Tips

* Always run `npm install` after cloning the project
* Create `.env` from `.env.example` before running tests
* Use `--headed` mode for debugging
* Do not commit real credentials to GitHub

---

## Useful Resources

* Playwright Documentation: [https://playwright.dev](https://playwright.dev)
* Node.js Documentation: [https://nodejs.org](https://nodejs.org)
* TypeScript Documentation: [https://www.typescriptlang.org](https://www.typescriptlang.org)

---

## License

This project is for learning and demonstration purposes.

Happy Testing 🚀

````

Just tell me 👍

# BDD Page Object Model with Playwright and Cucumber

This project is a Behavior-Driven Development (BDD) framework using Playwright and Cucumber in TypeScript. It is designed to automate the testing of the Ducati Scrambler website and its image creation functionality.

## Folder Structure

```
Playwright-BDD-AI-test
└── Playwright-BDD-AI-test
|   ├── features
|       └── scrambler.feature
|   ├── test
|       ├── pages
|           └── index.ts
|       ├── steps
|           └── index.ts
|       └── support
|           └── hooks.ts
|   ├── package.json
|   ├── tsconfig.json
|   └── README.md
```

## Setup Instructions

1. **Clone the repository:**

   ```
   git clone https://github.com/princebhatia1996/Playwright-BDD-AI-test
   ```

2. **Install dependencies:**

   ```
   npm install
   ```

3. **Run the tests:**
   To execute the tests, use the following command:
   ```
   npm test
   ```
4. **Run the reporter:**
   To run the reporter to see which tests failed and passed:
   ```
   npm run test:report
   ```

## Usage Guidelines

- The step definitions are located in `test/steps`.
- The page objects for the Ducati Scrambler and image creation functionalities are defined in `test/pages/`
- The feature scenarios are written in Gherkin syntax in `features/scrambler.feature`.
- The website we are testing is https://hacktheicon.scramblerducati.com/

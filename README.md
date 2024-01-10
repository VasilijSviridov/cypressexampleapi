### Cypress Demo Framework for Web & REST API Testing

Cypress implementation with Cucumber and Page Object Model.

[![Cypress.io](https://img.shields.io/badge/tested%20with-Cypress-04C38E.svg)](https://www.cypress.io/)

### Environment
- Linux / Mac / Windows

### Dependecy
- node 
- npm

### Libraries Used.
- @bahmutov/cypress-esbuild-preprocessor
- cypress
- @esbuild-plugins/node-modules-polyfill

### Techniques used
- Page Object Model
- BDD (Cucumber)
- REST API testing (GET, POST)

### How to install
- Pull the branch git clone [https://github.com/VasilijSviridov/cypressexampleapi](https://github.com/VasilijSviridov/cypressexampleapi)
- Goto the project root folder (cd cypressexampleapi)
- run the command ```npm install```

### How to run

a. Headless mode

- run the command ```npx cypress run```
- run with dashboards ```npx cypress run --record --key 7bc36823-a3f5-4df0-85c5-a031ff04653e```

b. Running from the `Test Runner`

- run the command ```npx cypress open``` and click on the required feature files

c. Docker mode (docker app needs to be installed before using command lines)
- run the command ```docker build -t cypress-tests .``` to create image/container.
- run the command ```docker run -it cypress-tests``` to initiate tests on docker container.

### BDD Structure
  Cypress - e2e

- Features - Test scenarios are written in feature files (auth.feature and booking.feature) 

- Pages - Page object classes (AuthPage.js and BookingPage.js) are created to encapsulate endpoint-specific logic.

- StepDefinitions - Implementation of step definitions to link BDD scenarios with actual test logic.

### Contributing
Feel free to contribute to this project by submitting issues or pull requests.

### License
This project is licensed under the MIT License - see the [LICENSE.md](https://github.com/VasilijSviridov/cypressexampleapi/blob/main/LICENSE) file for details.


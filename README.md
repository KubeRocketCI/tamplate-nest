# NodeJS + NestJS + TypeScript Template

This is a template for building backend applications using **NodeJS**, **NestJS**, and **TypeScript**. It includes TypeScript configuration, NestJS setup.

---

## Features

- 📝 **TypeScript** for type-safe development.
- 🚀 Pre-configured **NestJS** server.
- 🔧 Easy-to-understand project structure.

---

## Getting Started

### Prerequisites

Make sure you have the following installed:

- **NodeJS** (v22 or later)
- **npm**

---

### Installation

1. Clone the repository:
2. Install dependencies:
    ```bash
    npm install
    ```

---

### Scripts

#### Build Scripts

- **build**:
  - Command: nest build 
  - Description: Compiles the project using NestJS's build system. The compiled files are placed in the dist folder. 
  - Usage:
    ```bash
    npm run build
    ```
- **build:prod**:
  - Command: npm run build 
  - Description: Performs the same action as build but is intended to explicitly indicate that it is for production builds. 
  - Usage:
    ```bash
    npm run build:prod
    ```
    
#### Start Scripts

- **start:dev**
  - Command: nest start --watch 
  - Description: Starts the application in development mode with watch mode enabled, restarting the server automatically when files are changed. 
  - Usage:
    ```bash
    npm run start:dev
    ```
- **start:debug**
  - Command: nest start --debug --watch 
  - Description: Starts the application in debug mode with a file watcher. Useful for debugging the app during development. 
  - Usage:
    ```bash
    npm run start:debug
    ```
- **start:prod**
  - Command: node dist/main 
  - Description: Starts the application directly from the compiled files in the dist folder. This is the recommended way to run the application in a production environment. 
  - Usage:
    ```bash
    npm run start:prod
    ```
    
#### Linting Scripts

- **lint**
  - Command: eslint "{src,apps,libs,test}/**/*.ts" --fix 
  - Description: Runs ESLint to analyze the code and fix linting issues wherever possible. It checks all relevant .ts files in the src, apps, libs, and test directories. 
  - Usage:
    ```bash
    npm run lint
    ```

#### Testing Scripts

- **test**
  - Command: jest
  - Description: Runs all unit tests using Jest.
  - Usage:
    ```bash
    npm run test
    ```
- **test:watch**
  - Command: jest --watch
  - Description: Runs Jest in watch mode, re-running relevant tests whenever changes are detected.
  - Usage:
    ```bash
    npm run test:watch
    ```
- **test:cov**
  - Command: jest --coverage 
  - Description: Runs all tests and generates a test coverage report.
  - Usage:
    ```bash
    npm run test:cov
    ```
- **test:debug**
  - Command: node --inspect-brk -r tsconfig-paths/register -r ts-node/register node_modules/.bin/jest --runInBand 
  - Description: Runs all tests with debugging enabled. This is useful for troubleshooting failing tests. 
  - Usage:
    ```bash
    npm run test:debug
    ```
- **test:e2e**
  - Command: jest --config ./test/jest-e2e.json
  - Description: Runs all end-to-end (e2e) tests using a specific Jest configuration file (jest-e2e.json).
  - Usage:
    ```bash
    npm run test:e2e
    ```

---

## Project Structure

The project is organized as follows:

<pre>
node-nest-ts-template/
├── dist/                         # Compiled JavaScript output (generated)
├── src/                          # Application source code
│   ├── controllers/              # Business logic for handling API requests
│   │   └── app/                  # Example app-related controllers
│   ├── guards/                   # Route guards for authentication/authorization
│   ├── interceptors/             # Interceptors for transforming HTTP requests and responses
│   ├── middlewares/              # Custom middlewares for HTTP request pipelines
│   ├── models/                   # Models or schemas for database and TypeScript types
│   ├── pipes/                    # Pipes for validation and data transformation
│   ├── services/                 # Business logic and reusable service functions
│   │   └── app.service.ts        # Example service file
│   ├── app.module.ts             # Root application module
│   ├── main.ts                   # Application entry point
├── .gitignore                    # Git ignore rules
├── Dockerfile                    # Docker configuration for containerization
├── eslintrc.config.mjs           # ESLint configuration file
├── jest.config.ts                # Jest testing configuration
├── .nvmrc                        # nvm configuration for Node.js version
├── package.json                  # Project metadata and dependencies
├── package-lock.json             # Lockfile for exact dependencies
├── README.md                     # Project documentation
├── tsconfig.build.json           # TypeScript build-specific configuration
├── tsconfig.json                 # Base TypeScript configuration
</pre>

---

## Example Usage
The server runs on http://localhost:8080.

### Example Route: `/api/hello`

This project includes a sample route to demonstrate the structure. Access it by running the development server and opening the following URL:
```http request
GET http://localhost:8080/api/hello
```

Response:
```json
    {
        "message": "Hello World!"
    }
```

---

## Built With

- **Node.js** - JavaScript runtime for building server-side applications.
- **NestJS** - Fast framework for building efficient, scalable Node.js server-side applications.
- **TypeScript** - Strongly typed programming language that builds on JavaScript.

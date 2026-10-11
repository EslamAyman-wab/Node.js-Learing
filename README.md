# Node.js Learning Roadmap

This repository is my step-by-step path to learning Node.js from scratch and becoming a junior backend developer. I will start with the JavaScript and command-line basics I need, then learn how Node.js works, build HTTP servers and REST APIs, connect an application to a database, and finish by testing and deploying a complete backend. I will write and run code for every topic, keep my examples in this repository, and move on when I can explain the idea and build a small example without copying a tutorial.

## Study checklist

### 1. Prepare the foundations

- [ ] Install Node.js LTS and npm; learn to check versions with `node --version` and `npm --version`.
- [ ] Learn basic terminal commands, paths, files, and folders.
- [ ] Review JavaScript variables, types, operators, conditionals, loops, functions, arrays, and objects.
- [ ] Learn scope, closures, destructuring, template strings, spread/rest, and array methods such as `map`, `filter`, and `find`.
- [ ] Learn JavaScript modules: `import`/`export` and CommonJS `require`/`module.exports`.
- [ ] Practise using Git: status, add, commit, branches, and reading a diff.

### 2. Learn Node.js

- [ ] Understand what Node.js is, what it is used for, and how it differs from JavaScript in a browser.
- [ ] Learn the event loop and non-blocking I/O at a beginner level.
- [ ] Use core modules such as `fs`, `path`, and `events`.
- [ ] Read and write files, and understand when to use synchronous versus asynchronous methods.
- [ ] Learn callbacks, Promises, `async`/`await`, and how to handle rejected Promises.
- [ ] Use npm to initialize a project, install and remove packages, and understand `package.json` and `package-lock.json`.
- [ ] Learn environment variables and configuration; do not commit secrets.

### 3. Build web servers and APIs

- [ ] Learn HTTP basics: requests, responses, methods, status codes, headers, and JSON.
- [ ] Build a small server with Node.js's built-in `http` module.
- [ ] Learn Express: routes, middleware, route parameters, query strings, and request bodies.
- [ ] Design REST APIs using appropriate methods and status codes.
- [ ] Add input validation, consistent error handling, and useful logging.
- [ ] Use Postman, Insomnia, or `curl` to send requests and inspect responses.
- [ ] Learn CORS and basic browser-to-API communication.

### 4. Work with data

- [ ] Learn database fundamentals: tables or collections, records, relationships, and indexes.
- [ ] Choose one database to start with (for example, PostgreSQL or MongoDB) and learn its basic queries.
- [ ] Connect a Node.js application to the database using a suitable driver or ORM.
- [ ] Create, read, update, and delete records (CRUD).
- [ ] Learn schema design, migrations, and safe handling of database errors.
- [ ] Practise pagination, filtering, and sorting in API endpoints.

### 5. Add essential backend skills

- [ ] Learn authentication versus authorization, then implement a basic sign-up and sign-in flow.
- [ ] Store passwords safely with a password-hashing library; never store plain-text passwords.
- [ ] Learn sessions or token-based authentication and protect private routes.
- [ ] Validate and sanitize incoming data; use parameterized queries to reduce injection risk.
- [ ] Learn about HTTPS, secrets, least privilege, and common web risks such as broken access control.
- [ ] Understand Node.js error types and avoid exposing stack traces or secrets in API responses.

### 6. Test, maintain, and deploy

- [ ] Write unit tests for individual functions and integration tests for API routes.
- [ ] Learn how to use a debugger and read stack traces.
- [ ] Use a formatter and linter, and keep code organized into routes, controllers, services, and data-access modules as the project grows.
- [ ] Add a README to each project explaining setup, configuration, and how to run tests.
- [ ] Deploy a small API to a hosting platform and connect it to a hosted database.
- [ ] Learn basic production practices: configuration, logs, health checks, and graceful shutdown.

### 7. Put it together

- [ ] Build a task-management REST API with CRUD endpoints and a database.
- [ ] Add validation, consistent errors, tests, and API documentation.
- [ ] Add user accounts and ensure users can only access their own tasks.
- [ ] Deploy the project, document its live URL and setup instructions, and review what I would improve next.

## Learning habit

For each checkbox, first study the idea, then write a small example, change it to see what happens, and explain it in my own words. Keep notes and commit working milestones to Git. If I get stuck, reduce the problem to a smaller example, read the error message, and consult the official Node.js or library documentation.

# Node.js Learning Roadmap

My step-by-step path to learning Node.js from scratch and becoming a junior backend developer — with every chapter's code committed here as proof of work.

I start from the JavaScript and command-line basics I need, then learn how Node.js works, build HTTP servers and REST APIs, connect an application to a database, and finish by testing and deploying a complete backend. I write and run code for every topic, keep my examples in this repository, and only move on when I can explain the idea and build a small example without copying a tutorial.

---

## 📁 What's in this repository

| Path | Contents |
| :--- | :--- |
| `chapter_01/ch_01/` | First HTTP server: reading a file with the `fs` module and serving it, with routes split into `routes.js` |
| `chapter_01/ch_02/` | First Express app — a server built with the Express framework |
| `message.txt` | Sample file used by the filesystem examples |
| `package.json` | Dependencies (`express`) and dev tooling (`nodemon`) |

---

## 🛠️ Stack used so far
- **Runtime:** Node.js (CommonJS)
- **Framework:** Express 5
- **Dev tooling:** nodemon

---

## 🚀 Running an example

```bash
# 1. Clone
git clone https://github.com/EslamAyman-wab/Node.js-Learning.git
cd Node.js-Learning

# 2. Install dependencies
npm install

# 3. Run the current chapter
npm start                     # nodemon chapter_01/ch_02/index.js
# or directly:
node chapter_01/ch_01/index.js
```

---

## 📚 Study checklist

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
- [ ] Read and write files, and understand when to use synchronous versus asynchronous APIs.
- [ ] Build a basic HTTP server without a framework, then rebuild it with Express.
- [ ] Handle routing, query strings, request bodies, and HTTP status codes.

### 3. REST APIs and data
- [ ] Design REST endpoints (resources, verbs, status codes) for a small domain.
- [ ] Validate incoming request data and return consistent error responses.
- [ ] Connect an application to a relational database and write queries.
- [ ] Move database access into a small data layer instead of the route handlers.
- [ ] Add authentication and authorisation basics.

### 4. Quality and shipping
- [ ] Write unit tests for pure logic and integration tests for endpoints.
- [ ] Handle errors centrally instead of `try/catch` in every handler.
- [ ] Manage configuration and secrets with environment variables.
- [ ] Deploy the API and connect a real client to it.
- [ ] Document the API so someone else can use it without asking me.

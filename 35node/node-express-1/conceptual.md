### Conceptual Exercise

Answer the following questions below:

1.What are some ways of managing asynchronous code in JavaScript?
Callbacks, promises, async/await, eventbased, async function w/ promise

---

2.What is a Promise?
A Promise represents a value that may not be available yet but will be resolved or rejected at some point in the future.

---

## 3.What are the differences between an async function and a regular function? Regular function (takes input yes,no - returns parameter yes/no) - async function (impicit promise return, await expression)

4.What is the difference between Node.js and Express.js?
Node.js is the underlying JavaScript runtime that allows you to run JavaScript code on the server-side, while Express.js is a framework that runs on top of Node.js and simplifies the process of building web applications and APIs.

---

5.What is the error-first callback pattern?
The "Error-First Callback" pattern, also known as "Node.js Callback Pattern," is a convention used in Node.js. In this pattern, a callback function is passed as the last argument to an asynchronous function. The callback is then invoked once the asynchronous operation completes, passing any error as the first argument and the result (if successful) as the second argument.

---

6.What is middleware?
Middleware is software and cloud services that provide common services and capabilities to applications and help developers and operators build and deploy applications more efficiently. Middleware acts like the connective tissue between applications, data, and users.

---

7.What does the `next` function do?
next() function is a special callback that plays a crucial role in the middleware execution flow. It is used to pass control from the current middleware function to the next middleware function in the chain.
Middleware functions in Express.js are functions that have access to the request (req) and response (res) objects, and they can also access the next() function.

---

8.What are some issues with the following code? (consider all aspects: performance, structure, naming, etc)

```js
async function getUsers() {
  const elie = await $.getJSON("https://api.github.com/users/elie");
  const joel = await $.getJSON("https://api.github.com/users/joelburton");
  const matt = await $.getJSON("https://api.github.com/users/mmmaaatttttt");

  return [elie, matt, joel];
}
```

had some help with this last answer
Performance: The code makes three separate API calls using $.getJSON, but it awaits each call sequentially. This means that each API call will wait for the previous one to complete before starting, causing unnecessary delays. It would be more efficient to make these API calls concurrently to improve performance.

Structure: The code lacks error handling. If any of the API calls fails, the error will not be caught or handled properly, potentially leading to unhandled promise rejections. Proper error handling is essential in async functions.

Naming: The variables elie, joel, and matt are not very descriptive. Better naming would improve code readability and maintainability.

Hardcoded URLs: The code contains hardcoded URLs for fetching user data. A more flexible and maintainable approach would be to pass the usernames or IDs as parameters to the function instead of hardcoding the URLs.

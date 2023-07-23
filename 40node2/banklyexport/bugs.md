##

Faulty App Bugs

 route/auth.js

1. Potential Bug: auth.js
   In the /login route, the User.authenticate method is called, but it seems to be missing the await keyword. Assuming that User.authenticate is an asynchronous function (since it's used with await in the /register route), you should add the await keyword when calling it in the /login route.

   let user = await User.authenticate(username, password); // Add 'await' here

---
route/users.js
2. Potential Bug: users.js
   In the /delete route, the User.delete method is being called without await. Assuming that User.delete is an asynchronous function (since it is being used with await in other routes), you should add the await keyword when calling it in the /delete route. Otherwise, the response may be sent before the user is actually deleted.

   await User.delete(req.params.username); // add 'await' here

---
route/users.js
3. Error Handling Improvement:
   Error Handling Improvement: In the /delete route, there is no error handling for the case when the user cannot be found. If the User.delete method throws an error when the user is not found, the route should respond with a 404 error.

   // Check if the error is due to user not found and respond with a 404 error
   if (err.message === 'User not found') {
   return next(new ExpressError('User not found', 404));
   }
   return next(err);

---
middleware/auth.js
4. Potential Issue: In the authUser middleware, the code decodes the JWT token using jwt.decode(token). The jwt.decode() function in the jsonwebtoken library only decodes the token and does not perform validation. It means that even if the token is expired or tampered with, the decoded payload will still be available. To ensure proper validation, use the jwt.verify() function instead of jwt.decode().

// Bug fix 4
jwt.verify(token, SECRET_KEY, (err, payload) => {

---
 models/user.js
5. Issue:
   In the get method, if the user is not found in the database, the function doesn't actually return the ExpressError object, so the error won't be properly raised. Instead, it creates an ExpressError object but doesn't handle it properly. To fix this issue, make sure to return the ExpressError object when the user is not found.

static async get(username) {
const result = await db.query(
`SELECT username, first_name, last_name, email, phone FROM users WHERE username = $1`,
[username]
);

    const user = result.rows[0];

    if (!user) {
      throw new ExpressError('No such user', 404);
    }

    return user;

## }

6. Issue:
   The error message ReferenceError: TextEncoder is not defined typically occurs when running JavaScript code that relies on the TextEncoder or TextDecoder APIs in environments that do not support them. This error is commonly encountered in Node.js environments that use a version of Node.js that does not include these APIs by default (e.g., versions earlier than Node.js 11).

   unsure of fix, npm install text-encoding didnt work

### Conceptual Exercise

Answer the following questions below:

1.What is a JWT?
JWT stands for JSON Web Token. It is a compact and self-contained way of representing information between two parties. JWTs are commonly used to authenticate users and securely transmit information between a client (typically a web browser or a mobile app) and a server.

---

2.What is the signature portion of the JWT? What does it do?
The signature is one of the three parts of a JWT, along with the header and the payload. The signature is created using a secret key and is used to verify that the token hasn't been tampered with during transmission or storage. The server signs the JWT with the secret key, and when the client sends the JWT back to the server, the server re-computes the signature using the same secret key and compares it with the received signature to ensure integrity and authenticity.

---

3.If a JWT is intercepted, can the attacker see what's inside the payload?
Yes, the payload of a JWT is base64-encoded, not encrypted. This means that if an attacker intercepts the JWT, they can easily decode and view the contents of the payload. Therefore, sensitive information should not be stored directly in the payload. Instead, the payload should only contain information that is non-sensitive and not secret.

---

4.How can you implement authentication with a JWT? Describe how it works at a high level.
User Authentication: When a user logs in or provides their credentials, the server verifies the credentials, and if valid, generates a JWT containing user identification and other relevant information.
JWT Issuance: The server signs the JWT using a secret key and sends it back to the client.
Client Requests: For subsequent requests, the client sends the JWT along with the request in the authorization header.
Server Verification: Upon receiving the request, the server extracts the JWT from the authorization header, verifies its signature using the secret key, and checks the token's integrity.
Authorization: The server can then use the information in the JWT to authenticate the user and grant access to protected resources.

---

5.Compare and contrast unit, integration and end-to-end tests.
Unit tests, integration tests, and end-to-end tests are different levels of software testing:
Unit Tests: These tests focus on testing individual units or components of code in isolation. They are typically written and executed by developers to ensure that each unit of code works correctly.
Integration Tests: Integration tests verify interactions between different units or components of a system. They ensure that these units work together as expected when combined.
End-to-End Tests: End-to-end tests evaluate the entire system's functionality from start to finish, simulating real user scenarios. They test how different components interact with each other and the system as a whole.

---

6.What is a mock? What are some things you would mock?
In software testing, a mock is a technique where a simulated or fake version of a component is used to stand in for a real component during testing. Mocks are used to isolate the code being tested from external dependencies, such as databases, external APIs, or other services.
Some things you might mock include:
External APIs or web services
Databases and data access components
File systems and file I/O operations
Hardware devices or sensors
Third-party libraries or modules

---

7.What is continuous integration?
Continuous Integration (CI) is a software development practice where code changes are automatically built, tested, and integrated into the shared codebase regularly and frequently. The main goal of CI is to detect and address integration issues early in the development process, leading to higher code quality and faster delivery of software updates.

---

8.What is an environment variable and what are they used for?
An environment variable is a dynamic, key-value pair that exists outside the application but can be accessed and used by it. They are used to store configuration settings, system paths, credentials, or any data that might change across different environments (e.g., development, staging, production). Environment variables help decouple application-specific configurations from the codebase, making it more portable and secure.

---

9.What is TDD? What are some benefits and drawbacks?
Test-Driven Development (TDD) is a software development approach where developers write tests before writing the actual code. The TDD process generally follows these steps: write a test, run the test (which should fail as the code doesn't exist yet), write the code to make the test pass, and then refactor the code to improve its design without changing the behavior.Benefits of TDD:
Improved Code Quality: TDD encourages writing testable and modular code, leading to higher code quality.
Faster Feedback Loop: Developers get immediate feedback on their changes, which helps catch bugs early.
Better Documentation: Test cases serve as living documentation of the code's intended behavior.
Easier Refactoring: Confidence in test coverage allows developers to refactor with less fear of breaking functionality.
Drawbacks of TDD:
Overhead: Writing tests before code requires additional effort and time.
Initial Learning Curve: Adapting to TDD might take time and practice, especially for developers new to the approach.
Complete Coverage Not Guaranteed: TDD can't guarantee that all edge cases and scenarios are tested adequately.

---

10.What is the value of using JSONSchema for validation?
JSONSchema is a JSON-based format used to define the structure, data types, and constraints for JSON objects. Using JSONSchema for validation offers several benefits:
Data Validation: JSONSchema allows you to define rules and constraints on the data, ensuring that it adheres to the expected format and structure.
Self-Documenting: JSONSchema serves as documentation for the expected data structure, making it easier for developers to understand and work with the data.
Interoperability: JSONSchema is a widely supported standard, making it easier to validate JSON data across different systems and programming languages.
Robustness: By validating JSON data against a schema, you can catch errors and prevent data inconsistencies early in the development process.

---

11.What are some ways to decide which code to test?
When deciding which code to test, you can follow these guidelines:
Critical Business Logic: Focus on testing the core business logic and algorithms that directly impact the application's functionality and correctness.
Edge Cases: Test scenarios where inputs or conditions are at their minimum or maximum values, as these are likely to uncover corner cases and potential bugs.
Error-Prone Code: Prioritize testing code that is error-prone, such as input parsing, data conversions, and error handling mechanisms.
Code Coverage: Aim for good code coverage, which ensures that most of the code is tested, including branches and conditional statements.
High-Risk Code: Test code that interacts with external systems, handles security-related operations, or could have severe consequences if it fails.

---

12.What does `RETURNING` do in SQL? When would you use it?
RETURNING is a clause in SQL used primarily with the INSERT, UPDATE, and DELETE statements. It allows the user to retrieve the data that has been modified by the operation.
For example, with an INSERT statement, the RETURNING clause can be used to fetch the newly inserted rows' data. Similarly, with an UPDATE or DELETE statement, RETURNING can be used to obtain the data of the affected rows before they were updated or deleted.
This feature is particularly useful when you need to access or work with the data that was affected by the data modification operation without needing to perform an additional query.

---

13.What are some differences between Web Sockets and HTTP?
Web Sockets and HTTP are both protocols used in web development, but they serve different purposes and have different characteristics:
Connection Type: HTTP is a stateless request-response protocol, where a client makes a request to the server, and the server responds with the requested data. Web Sockets, on the other hand, enable full-duplex communication, allowing both the client and server to send messages to each other over a single, long-lived connection.

Communication Pattern: HTTP follows a traditional client-server communication pattern, where the client initiates the communication and the server responds. Web Sockets allow real-time bidirectional communication, enabling server-initiated updates or notifications to the client without the need for the client to poll the server constantly.

Overhead: HTTP headers can add considerable overhead to each request-response cycle, which can be problematic for real-time applications with frequent small updates. Web Sockets have less overhead since the connection is established once and used for multiple messages.

## Use Cases: HTTP is widely used for typical web browsing, REST APIs, and fetching resources. Web Sockets are best suited for applications that require real-time updates, such as chat applications, online gaming, live notifications, and collaborative tools.

Did you prefer using Flask over Express? Why or why not (there is no right
answer here --- we want to see how you think about technology)?
Ultimately, the choice between Flask and Express depends on the specific requirements of the project, the development team's expertise, and the ecosystem surrounding the chosen language (Python or JavaScript). Both frameworks have their strengths and can be excellent choices for web development projects.

I did prefer flask more.

Written in Python, a language known for its readability and ease of learning.
Lightweight and minimalistic, offering developers the flexibility to choose and integrate additional components as needed.
Flask follows a simple and straightforward design philosophy, making it an excellent choice for small to medium-sized projects or prototyping.
Suitable for developers who prefer a more explicit and less opinionated framework.

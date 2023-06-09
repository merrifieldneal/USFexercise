### Conceptual Exercise

Answer the following questions below:

1. What are important differences between Python and JavaScript?
python is high level object oriented language vs scripting language for webpages

2. Given a dictionary like ``{"a": 1, "b": 2}``: , list two ways you
  can try to get a missing key (like "c") *without* your programming
  crashing.
one way is the get() method, the other way is a try except block

3. What is a unit test?
An unit test is a type of software testing that focuses on verifying the smallest testable components or units of a program in isolation.

4. What is an integration test?
An integration test is a type of software testing that focuses on verifying the interactions and compatibility between multiple components, modules, or systems of an application.

5. What is the role of web application framework, like Flask?
A web application framework, such as Flask, plays a fundamental role in the development of web applications. It provides a structured and standardized approach to building web-based software by offering a collection of tools, libraries, and utilities that simplify common web development tasks.

6. You can pass information to Flask either as a parameter in a route URL
  (like '/foods/pretzel') or using a URL query param (like
  'foods?type=pretzel'). How might you choose which one is a better fit
  for an application?
depending on your audience, the first thing i can think of is human readability

7. How do you collect data from a URL placeholder parameter using Flask?
In Flask, you can collect data from a URL placeholder parameter by defining a route with a parameter placeholder and accessing it within your view function.

8.How do you collect data from the query string using Flask?
In Flask, you can collect data from the query string using the request.args object. The request.args object contains the parsed query string parameters, allowing you to access the values provided in the URL query parameters.

9. How do you collect data from the body of the request using Flask?
In Flask, you can collect data from the body of the request using the request object. The request object provides access to the data submitted in the request body, such as form data, JSON payloads, or other content types.

10. What is a cookie and what kinds of things are they commonly used for?
A cookie is a small piece of data that is stored on a user's computer or device by a website. It is sent by the server to the client's browser and is subsequently returned with each subsequent request to the same server. Cookies are primarily used to maintain stateful information and provide a way for websites to remember user preferences, track user activity, and personalize the browsing experience

11. What is the session object in Flask?
In Flask, the session object is a built-in utility that allows you to store data associated with a specific user session. 

12. What does Flask's `jsonify()` do?
Flask's jsonify() function is a utility that serializes a Python object into a JSON response. 

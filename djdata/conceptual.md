### Conceptual Exercise

Answer the following questions below:

1.What is PostgreSQL?
open source relational database that follows sql standard

2.What is the difference between SQL and PostgreSQL?
the major one being that PostgreSQL is open source and SQL Server is owned by Microsoft/psql is object relational?

3.In `psql`, how do you connect to a database?
\c DB_NAME

4.What is the difference between `HAVING` and `WHERE`?
WHERE Decide which rows to use vs HAVING Determine which grouped results to keep

5.What is the difference between an `INNER` and `OUTER` join?
inner join is common features of both (middle of venn diagram)/ outer combines one or both sides of venn diagram as well as middle

6.What is the difference between a `LEFT OUTER` and `RIGHT OUTER` join?
left table rows plus combined tables, vs right tables rows plus combined tables

7. What is an ORM? What do they do?
   Object Relational Mapper is a piece of software dewsignef to translate between the data respresentations used by databases and those used in object oriented programming.

8. What are some differences between making HTTP requests using AJAX
   and from the server side using a library like `requests`?
   There may be some header differences, but the main behavior difference is on the client With an ajax request, the current window/document is unaffected and javascript code can examine the results of the request and do what it wants to with those results (insert HTML dynamically into the page, parse JSON and use it the page logic, parse XML, etc...).
   The server doesn't do anything different - it's just in how the client treats the response from the two requests.
   https://stackoverflow.com/questions/8685750/difference-between-ajax-request-and-a-regular-browser-request

9. What is CSRF? What is the purpose of the CSRF token?
   cross site request forgery token A CSRF Token is a secret, unique and unpredictable value a server-side application generates in order to protect CSRF vulnerable resources.
   The tokens are generated and submitted by the server-side application in a subsequent HTTP request made by the client.

10. What is the purpose of `form.hidden_tag()`?
    The form. hidden_tag() template argument generates a hidden field that includes a token that is used to protect the form against CSRF attacks.

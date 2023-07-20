# Broken App Issues

1:req.body is not available by default in Express. To parse incoming JSON data, you need to use the express.json() middleware.

2:In the catch block, next(err) is used, but the err variable is not defined. It should be catch(err) instead.

3:Since the axios.get calls are asynchronous, you need to use Promise.all to wait for all the requests to finish before processing the results.

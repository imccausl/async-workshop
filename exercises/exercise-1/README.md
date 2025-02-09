# Exercise 1

## Experimenting with asynchronous code

The purpose of this exercise is to acquaint you with one of the most common units of asynchronous code in javascript: the callback function. We'll play with the `setTimeout` API, since it's a pretty easy way to get started with an asynchronous function without having to do things like network requests, etc. In node, as in the web browser, setTimeout works exactly the same: it takes a callback, and a value in milliseconds and will wait _at least_ that number of milliseconds before calling the callback.

---

To get started, use the following command in your terminal:

`yarn workspace ex-1 start:exercise`

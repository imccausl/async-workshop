# Exercise 5

## Async/Await

Having taken this brief detour into generator functions, let's look at how to use the async/await syntax. Async/await was introduced to allow developers to write code that _looks_ synchronous but is actually asynchronous. To really understand the details of how async/await works, we'd have to also look at generator functions as kind of a necessary step before async/await.

The basic elements are as follows:

1) You declare an async function like this: `async function myAsyncFunction() {}` Under the hood, this function returns a promise. If you wanted to, you could use `.then` on it: `myAsyncFunction().then()`
2) Inside your async function, you can use the `await` keyword with other asynchronous functions (kind of like the `yield` keyword from Generators) to effectively `pause` execution of your async function until the function you are `await`ing has resolved.

The key thing here is that you can only `await` promises or other async functions. Outside of that context, `await` doesn't really make sense.

Let's see how this works by rewriting our Promise example using async await:

`yarn workspace ex-5 start:exercise`

# Exercise 4

## Async/Await

To really understand the details of how async/await works, let's take a quick look at generator functions.

### Generators

Let's take a moment to consider them. Generator functions are a special kind of function you can delcare in Javascript that returns an iterator. The iterator allows you to yield an infinite number of values, which you can generate programmatically by calling `.next()` on the iterator. Consider this example:

```ts
// delcaring a generator function

function* infiniteValues() {
  let i = 0
  while (true) {
    yield i
    i++
  }
}

const values = infiniteValues()

console.log(values.next()) // { value: 0, done: false }
console.log(values.next()) // { value: 0, done: false }
console.log(values.next()) // { value: 0, done: false }
```

Ordinarily, doing a `while (true)` loop like I just did would be a recipe for disaster. But an interator halts execution at the `yield` keyword, and, well, yields up the value. Only when we call `.next()` again do we _return_ to the iterator's execution context and pick up where we left off until the yield is reached again.

### Passing values into the iterator

OK, so we can use generator functions to _generate_ values. But what if we could pass a value into the generator? Well, it turns out you can. It looks something like this:

```ts
function* add2Numbers(): Generator<any, any, number | undefined> {
  const num1 = yield
  const num2 = yield 
  yield num1 && num2 ? num1 + num2 : "Not a number"
}

const adder = add2Numbers()

adder.next()
adder.next(5)
console.log(adder.next(10)) // { value: 15; done: false }
```

### Promises with Generators

If we can pass values into an iterator, suppose we wanted to use generators to resolve our Promise values so that we don't have to use `.then` 🤔 In the interests of time, we'll just take a brief look at how this might look, but we won't do the exercise.

To see this in action, check the solution:

`yarn workspace ex-4 check:solution`

## Key Takeaway

The key takeaway here is that generator functions have a unique ability to pause execution of their iterator function and exit out of the execution context. We can then return back to into it and pick up where we left off whenever we want to by calling the `.next()` method, so long as the iterator hasn't finished running.

This is not unlike the async/await syntax. Here, instead of passing a handler to a `.then` method of the Promise so that it will get called when the Promise has resolved, we can _pause the execution of our async function_ and then _return back to it once the value has arrived_. This gives us the ability to write and reason about asynchronous logic as though it were effectively synchronous.

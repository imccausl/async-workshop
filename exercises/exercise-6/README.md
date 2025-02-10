# Exercise 6

This is not really an exercise, so much as a sandbox/example.

## A Fake Testing Environment

Let's put this all together to try to understand why playwright implements an API with async/await. What we've looked at so far is that a Promise is a placeholder for a value that you expect to receive at a future time. Ordinarily, this value will be coming from a `fetch` call, or some other kind of operation that takes _time_ to execute.

In the case of something like playwright, we have a client API which has to communicate with some other external system that interacts with a webpage. Our client has to be able to send and receive messages from the test environment when it is in the state that we need it to be in order to assert on its state.

This is a bit more complex than something like a frontend unit testing environment where we might render the tests in the _exact same_ place that we assert on them. In that case, we don't really need to be able to send messages between some external environment that is rendering the thing that we want to test.

One way this might be done is by using an event-based API. Let's look at an extremely simple example of how we might be able to use Promises and async/await to receive messages from an external system to use in our client testing environment. Once again, we'll just use setTimeout to simulate the dimension of _time_, rather than actually call out to some external system.

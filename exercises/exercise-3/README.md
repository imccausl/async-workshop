# Exercise 3

## Promise API

Now that we have tried out using setTimeout with callbacks, let's look at how we might do this with the [Javascript Promise API](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise). Creating a promise looks like this:

```ts
const myPromise = new Promise((resolve, reject) => {
  if (!error) {
    // something good happened, we can resolve
    resolve("We did it!") // we can pass any value here, and it will get passed to our .then method when the promise resolves
  } else {
    // uh oh! an error 😱
    reject("Something happened. We could not resolve") // this value will be passed to our .catch method.
  }
})

myPromise.then((value) => console.log(value)).catch(error => console.error(error))
```

Supposing we wanted to make a function that turned setTimeout into a Promise, we could do something like this:

```ts
function timeout(delay: number) {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, delay)
  })
}
```

There's two things to note here:

1) we don't really have an error state we have to worry about, so we don't need reject. I included it here just for illustration purposes.
2) resolve can be passed _directly_ to setTimeout as the callback function. When the delay has elapsed, setTimeout will call the Promise's `resolve` function, and the promise will resolve successfully.

Head over to the 'exercise.ts' file to give it a try!

---

To get started, use the following command in your terminal:

`yarn workspace ex-3 start:exercise`

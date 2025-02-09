// create a countdown using setTimeout with the Promise API
// we've provided the previous solution to help you get started.

console.log("3")

setTimeout(() => {
  console.log("2")

  setTimeout(() => {
    console.log("1")

    setTimeout(() => {
      console.log("HAPPY NEW YEAR 🎉🎉🎉")
    }, 1000)
  }, 1000)
}, 1000)

// what is wrong with this solution?

function countdown(count: number | string) {
  return new Promise((resolve, reject) => {
    console.log(`${count}`)
    setTimeout(resolve, 1000)
  })
}

countdown("3").then(() => countdown("2")).then(() => countdown("1")).then(() => console.log("HAPPY NEW YEAR! 🎉🎉🎉"))


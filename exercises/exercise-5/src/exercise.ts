// convert the promise exercise to use async await

function countdown(count: number | string) {
    console.log(`${count}`)
    return new Promise((resolve) => {
        setTimeout(resolve, 1000)
    })
}

countdown('3')
    .then(() => countdown('2'))
    .then(() => countdown('1'))
    .then(() => console.log('HAPPY NEW YEAR! 🎉🎉🎉'))

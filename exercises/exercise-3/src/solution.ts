// what is wrong with this solution?

function countdown(count: number | string) {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    return new Promise((resolve, reject) => {
        console.log(`${count}`)
        setTimeout(resolve, 1000)
    })
}

countdown('3')
    .then(() => countdown('2'))
    .then(() => countdown('1'))
    .then(() => console.log('HAPPY NEW YEAR! 🎉🎉🎉'))

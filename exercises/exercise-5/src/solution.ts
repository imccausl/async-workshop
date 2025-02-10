// convert the promise exercise to use async await

function timeout(delay = 1000) {
    return new Promise((resolve) => {
        setTimeout(resolve, delay)
    })
}

async function count(count: number | string) {
    console.log(`${count}`)
    await timeout()
}

async function countdown() {
    await timeout()
    await count(2)
    await count(1)
    console.log('HAPPY NEW YEAR! 🎉🎉🎉')
}

console.log('3')
countdown()

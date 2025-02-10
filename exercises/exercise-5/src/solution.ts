// convert the promise exercise to use async await
function timeout(delay = 1000) {
    return new Promise((resolve) => {
        setTimeout(resolve, delay)
    })
}

async function countdown() {
    console.log('3')
    await timeout()
    console.log('2')
    await timeout()
    console.log('1')
    await timeout()
    console.log('HAPPY NEW YEAR! 🎉🎉🎉')
}

countdown()

console.log('3')

// create a countdown using setTimeout

setTimeout(() => {
    console.log('2')

    setTimeout(() => {
        console.log('1')

        setTimeout(() => {
            console.log('HAPPY NEW YEAR 🎉🎉🎉')
        }, 1000)
    }, 1000)
}, 1000)

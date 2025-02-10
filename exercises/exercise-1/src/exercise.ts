// in what order will these execute?

console.log('3')

setTimeout(() => {
    console.log('2')
}, 0)

console.log('1')

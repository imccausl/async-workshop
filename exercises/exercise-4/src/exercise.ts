function* infiniteValues() {
    let i = 0
    while (true) {
        yield i
        i++
    }
}

const values = infiniteValues()

console.log(values.next().value) // 0
console.log(values.next().value) // 1
console.log(values.next().value) // 2

// example of passing values into a generator

function* add2Numbers(): Generator<any, any, number | undefined> {
    const num1 = yield
    const num2 = yield
    yield num1 && num2 ? num1 + num2 : 'Not a number'
}

const adder = add2Numbers()

adder.next()
adder.next(5)
console.log(adder.next(10)) // { value: 15; done: false }

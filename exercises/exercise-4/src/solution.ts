function asyncGeneratorRunner<T>(
    generatorFunction: () => Generator<Promise<T>, T, T>,
): void {
    const iterator = generatorFunction()

    function handle(iteratorResult: IteratorResult<Promise<T>, T>): void {
        if (iteratorResult.done) {
            console.log(iteratorResult.value)
            return
        }

        Promise.resolve(iteratorResult.value)
            .then((res) => handle(iterator.next(res)))
            .catch((err) => handle(iterator.throw(err)))
    }

    handle(iterator.next())
}

function countdown(ms: number, value: string): Promise<string> {
    return new Promise((resolve) => setTimeout(() => resolve(value), ms))
}

function* countdownTimer(): Generator<Promise<string>, string, string> {
    console.log('3')
    const value: string = yield countdown(1000, '2')
    console.log(value)
    const nextValue: string = yield countdown(1000, '1')
    console.log(nextValue)
    const message = yield countdown(1000, 'HAPPY NEW YEAR! 🎉🎉🎉')
    return message
}

asyncGeneratorRunner(countdownTimer)

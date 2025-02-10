import EventEmitter from 'node:events'

class Page extends EventEmitter {
    goto(url: string) {
        console.log(`Navigating to URL: ${url}`)

        setTimeout(
            () => {
                this.emit('load', url)
            },
            Math.random() * 2000 + 500,
        )

        return new Promise<void>((resolve) => {
            this.once('load', () => {
                console.log(`✅ Navigated to URL: ${url}`)
                resolve()
            })
        })
    }

    getByLabel(label: string) {
        console.log(`Finding element: ${label}`)

        setTimeout(
            () => {
                this.emit('locate', label)
            },
            Math.random() * 1000 + 500,
        )

        return new Promise((resolve, reject) => {
            this.once('locate', () => {
                const success = Math.random() > 0.5 // 50% chance to resolve or reject

                if (success) {
                    resolve(`✅ Found element with label: ${label}`)
                } else {
                    reject(
                        new Error(
                            `❌ Could not find element with label: ${label}`,
                        ),
                    )
                }
            })
        })
    }
}

class Browser {
    newPage() {
        return new Page()
    }
}

export function expect(assertion: any) {
    const result = typeof assertion === 'function' ? assertion() : assertion
    return {
        toBeInTheDocument() {
            if (result.includes('Could not find element')) {
                throw new Error('Assertion failed!')
            }

            console.log(result)
        },
    }
}

export async function test(
    name: string,
    callback: ({
        page,
        browser,
    }: {
        page: Page
        browser: Browser
    }) => Promise<void>,
) {
    console.clear()
    console.log(`>>>>>>> STARTING TEST Running test: ${name}`)
    const browser = new Browser()
    const page = browser.newPage()

    try {
        await callback({ page, browser })
        console.log('Test completed successfully 🎉🎉🎉')
    } catch (error) {
        console.error(`Test failed: ${error}`)
    }
}

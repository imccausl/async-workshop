import { expect, test } from './utils'

test('Loads the page without errors', async ({ page }) => {
    await page.goto('https://www.mytestpage.com')
    const selector = await page.getByLabel('MyLabel')

    expect(selector).toBeInTheDocument()
})

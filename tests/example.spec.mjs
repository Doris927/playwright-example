import { test } from '@playwright/test'

test('basic test', async ({ page }, testInfo) => {
	await page.goto('https://zozo.jp/_card/')
	await page.evaluate(() => {
		window.scroll(0, 300)
	})
	await page.waitForTimeout(500)
	await page.waitForSelector('.p-card-application-balloon', {
		state: 'visible'
	})

	await page.screenshot({
		path: `screenshot/screenshot_${testInfo.project.use.defaultBrowserType}.png`
	})
})

import puppeteer from 'puppeteer';
import test from 'ava';

let browser;
test.before(async t => { browser = await puppeteer.launch({headless: false}) })
test.after('cleanup', t => { browser.close() })

const search = async function search(page, q) {
  await page.type("input[name=q]", q, {delay: 100});
  await page.$eval('form', form => form.submit());

  return page.waitForNavigation();
}


test('search q=google', async (t) => {
  const page = await browser.newPage()
  await page.goto('https://google.com', { waitUntil: 'networkidle2' })
  await search(page, 'google')
  let firstResultText = await page.evaluate(() => document.querySelector('#ires a').innerText)
  t.truthy(firstResultText === 'Google')
})

test('search q=github', async (t) => {
  const page = await browser.newPage()
  await page.goto('https://google.com', { waitUntil: 'networkidle2' })
  await search(page, 'github')
  let firstResultText = await page.evaluate(() => document.querySelector('#ires a').innerText)
  t.truthy(firstResultText === "The world's leading software development platform · GitHub")
})
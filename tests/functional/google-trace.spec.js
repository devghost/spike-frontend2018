import puppeteer from 'puppeteer';
import test from 'ava';

let browser;

test.before(async t => { browser = await puppeteer.launch({headless: false}) })
test.after('cleanup', t => { browser.close() })

// Ref. https://github.com/ChromeDevTools/timeline-viewer
test('Trace Google', async (t) => {
  const page = await browser.newPage()
  await page.tracing.start({ path: 'test-output/google-trace.json' });
  await page.goto('https://google.com', { waitUntil: 'networkidle2' })
  await page.tracing.stop();

  t.pass();
})

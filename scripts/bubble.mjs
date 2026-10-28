import { chromium } from 'playwright-core';
import sparticuz from '@sparticuz/chromium';

const browser = await chromium.launch({
  executablePath: await sparticuz.executablePath(),
  args: sparticuz.args.filter((a) => a !== '--single-process' && a !== '--no-zygote'),
});

const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
await page.addInitScript(() => localStorage.setItem('inter-theme', 'dark'));
await page.goto('http://localhost:4173', { waitUntil: 'networkidle' });
await page.waitForTimeout(3600);
await page.click('.chat-launcher');
await page.waitForSelector('.chat-panel', { state: 'visible' });
await page.waitForTimeout(600);
await page.fill('.chat-input input', 'What businesses does INTER have?');
await page.press('.chat-input input', 'Enter');
await page.waitForTimeout(250);
await page.screenshot({ path: 'shots/user-bubble-dark.png' });
await browser.close();
console.log('done');

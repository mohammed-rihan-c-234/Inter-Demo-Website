import { chromium } from 'playwright-core';
import sparticuz from '@sparticuz/chromium';
import { mkdirSync } from 'fs';

const out = 'shots';
mkdirSync(out, { recursive: true });

const browser = await chromium.launch({
  executablePath: await sparticuz.executablePath(),
  args: sparticuz.args.filter((a) => a !== '--single-process' && a !== '--no-zygote'),
});

const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
await page.addInitScript(() => localStorage.setItem('inter-theme', 'dark'));
await page.goto('http://localhost:4173', { waitUntil: 'networkidle' });
await page.waitForTimeout(3600);
await page.click('.chat-launcher');
await page.waitForSelector('.chat-panel', { state: 'visible', timeout: 10000 });
await page.waitForTimeout(800);
await page.fill('.chat-input input', 'What businesses does INTER have?');
await page.press('.chat-input input', 'Enter');
await page.waitForTimeout(2800);
const panelVisible = await page.isVisible('.chat-panel');
console.log('panel visible:', panelVisible);
await page.screenshot({ path: `${out}/fix-chat-dark.png` });
await page.close();
await browser.close();
console.log('done');

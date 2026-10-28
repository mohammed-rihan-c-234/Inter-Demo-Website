import { chromium } from 'playwright-core';
import sparticuz from '@sparticuz/chromium';
import { mkdirSync } from 'fs';

const out = 'shots';
mkdirSync(out, { recursive: true });

const browser = await chromium.launch({
  executablePath: await sparticuz.executablePath(),
  args: sparticuz.args.filter((a) => a !== '--single-process' && a !== '--no-zygote'),
});

// 1. Dark-mode chat: send a question, verify the user bubble is readable
{
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  await page.addInitScript(() => localStorage.setItem('inter-theme', 'dark'));
  await page.goto('http://localhost:4173', { waitUntil: 'networkidle' });
  await page.click('.chat-launcher');
  await page.waitForTimeout(700);
  await page.fill('.chat-input input', 'What businesses does INTER have?');
  await page.press('.chat-input input', 'Enter');
  await page.waitForTimeout(2600);
  await page.screenshot({ path: `${out}/fix-chat-dark.png` });
  await page.close();
}

// 2. Services tabs in both modes
for (const theme of ['light', 'dark']) {
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  await page.addInitScript((t) => localStorage.setItem('inter-theme', t), theme);
  await page.goto('http://localhost:4173', { waitUntil: 'networkidle' });
  await page.evaluate(() => document.querySelector('#services')?.scrollIntoView());
  await page.waitForTimeout(1500);
  await page.screenshot({ path: `${out}/services-${theme}-1.png` });
  // click a later tab (HVAC)
  await page.evaluate(() => [...document.querySelectorAll('.services-tab')].find((b) => b.textContent.trim() === 'HVAC')?.click());
  await page.waitForTimeout(900);
  await page.screenshot({ path: `${out}/services-${theme}-2.png` });
  await page.close();
}

await browser.close();
console.log('done');

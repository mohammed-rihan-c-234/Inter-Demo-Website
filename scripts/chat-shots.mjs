import { chromium } from 'playwright-core';
import sparticuz from '@sparticuz/chromium';
import { mkdirSync } from 'fs';

const out = 'shots';
mkdirSync(out, { recursive: true });

const browser = await chromium.launch({
  executablePath: await sparticuz.executablePath(),
  args: sparticuz.args.filter((a) => a !== '--single-process' && a !== '--no-zygote'),
});

const run = async (theme) => {
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  await page.addInitScript((t) => localStorage.setItem('inter-theme', t), theme);
  await page.goto('http://localhost:4173', { waitUntil: 'networkidle' });
  // launcher + nudge after 3.5s (nudge hits at 7s — we click at 3.5s to skip it via open)
  await page.waitForTimeout(3600);
  await page.screenshot({ path: `${out}/chat-${theme}-closed.png` });
  await page.click('.chat-launcher');
  await page.waitForTimeout(700);
  await page.fill('.chat-input input', 'What businesses does INTER have?');
  await page.press('.chat-input input', 'Enter');
  await page.waitForTimeout(2600);
  await page.screenshot({ path: `${out}/chat-${theme}-open.png` });
  // quote flow
  await page.fill('.chat-input input', 'Request a quote');
  await page.press('.chat-input input', 'Enter');
  await page.waitForTimeout(2400);
  await page.screenshot({ path: `${out}/chat-${theme}-quote.png` });
  await page.close();
};

await run('light');
await run('dark');
await browser.close();
console.log('done');

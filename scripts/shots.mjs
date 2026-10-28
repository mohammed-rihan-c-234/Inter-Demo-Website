import { chromium } from 'playwright-core';
import sparticuz from '@sparticuz/chromium';
import { mkdirSync } from 'fs';

const out = 'shots';
mkdirSync(out, { recursive: true });

const browser = await chromium.launch({
  executablePath: await sparticuz.executablePath(),
  args: sparticuz.args.filter((a) => a !== '--single-process' && a !== '--no-zygote'),
});

for (const theme of ['light', 'dark']) {
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  await page.addInitScript((t) => localStorage.setItem('inter-theme', t), theme);
  await page.goto('http://localhost:4173', { waitUntil: 'networkidle' });
  await page.screenshot({ path: `${out}/${theme}-hero.png` });
  await page.evaluate(() => document.querySelector('#businesses')?.scrollIntoView());
  await page.waitForTimeout(1200);
  await page.screenshot({ path: `${out}/${theme}-businesses.png` });
  await page.evaluate(() => document.querySelector('#about')?.scrollIntoView());
  await page.waitForTimeout(1200);
  await page.screenshot({ path: `${out}/${theme}-about.png` });
  await page.close();
}

await browser.close();
console.log('done');

/* eslint-disable no-unused-vars */
import puppetteer from 'puppeteer';

jest.setTimeout(30000);

describe('popover', () => {
  let browser = null;
  let page = null;
  const baseUrl = 'http://localhost:9000';
  beforeAll(async () => {
    browser = await puppetteer.launch({
      headless: false,
      slowMo: 100,
      devtools: true,
    });
    page = await browser.newPage();
  });
  afterAll(async () => {
    await browser.close();
  });
  test('test button popover', async () => {
    const button = await page.$('.button_popover');
    await button.click();
    await page.waitForSelector('.popover', {
      visible: true,
    });
  });
});


const puppeteer = require('puppeteer');

(async () => {
   const browser = await puppeteer.launch({
      headless: false,
      defaultViewport: null,
   });
   const page = await browser.newPage();
   await page.goto('https://www.google.com.br/');
   await page.click('[href="https://accounts.google.com/ServiceLogin?hl=pt-BR&passive=true&continue=https://www.google.com.br/&ec=GAZAmgQ"]')
   await page.evaluate(val => document.querySelector('#identifierId').value = val, 'newInputValue');
   
})();
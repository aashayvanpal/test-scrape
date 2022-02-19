const puppeteer = require('puppeteer');
// https://in.finance.yahoo.com/
// const url = process.argv[2];
// if (!url) {
//     throw "Please provide URL as a first argument";
// }
async function run () {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('https://www.nseindia.com/');
    await page.screenshot({path: 'screenshot.png'});
    browser.close();
}
run();
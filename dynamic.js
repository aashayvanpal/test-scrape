const puppeteer = require('puppeteer');
function run () {
    return new Promise(async (resolve, reject) => {
        try {
            const browser = await puppeteer.launch();
            const page = await browser.newPage();
            // await page.goto("https://news.ycombinator.com/");
            await page.goto("https://webscraper.io/test-sites/e-commerce/allinone");
            let urls = await page.evaluate(() => {
                let results = [];
                // let items = document.querySelectorAll('span.pagetop > a');
                let items = document.querySelectorAll('div.col-sm-4.col-lg-4.col-md-4 > div.thumbnail > div.caption > h4 > a.title');
                
                items.forEach((item) => {
                    results.push({
                        url:  item.getAttribute('href'),
                        text: item.innerText,
                    });
                });
                return results;
            })
            browser.close();
            return resolve(urls);
        } catch (e) {
            return reject(e);
        }
    })
}
run().then(console.log).catch(console.error);
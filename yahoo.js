const puppeteer = require('puppeteer');
function run() {
    return new Promise(async (resolve, reject) => {
        try {
            const browser = await puppeteer.launch();
            const page = await browser.newPage();
            await page.goto("https://news.ycombinator.com/");
            // console.log(page)
            let urls = await page.evaluate(() => {
                let results = [];
                let items = document.querySelectorAll('ul.My(0).P(0).Wow(bw).Ov(h)>li.js-stream-content.Pos(r)>div.Py(14px) Pos(r)>div.Cf>div.Ov(h) Pend(44px) Pstart(25px)>h3.Mb(5px)> a');
                // let items = document.querySelector('div#Nav-0-DesktopNav> div.Bgc(#f9f9f9).Bgc($bg-header).Pt(2px).Bgc(t)!>div.nr-applet-title.Fl(start).Pend(navPaddings).Bxz(bb).Ov(h).H(navHeight).Pstart(10px).Mstart(-10px)!.H(itemHeight_uhMagDesign)!.Pend(30px)!> a');
                console.log(items)
                items.forEach((item) => {
                    results.push({
                        url: item.getAttribute('href'),
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
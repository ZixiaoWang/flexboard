import { Browser, ElementHandle, Page } from "puppeteer";
import { getBrowser } from "./cache";
import fs from "fs-extra";
import path from "path";
import colors from "colors";

const getIndexes = () => {
    return [
        "https://www.freightwaves.com/",
        "https://www.freightwaves.com/american-shipper",
        "https://www.freightwaves.com/modern-shipper",
        "https://www.freightwaves.com/truckload-indexes",
        "https://www.freightwaves.com/news/category/innovation/startups",
        "https://www.freightwaves.com/news/business/supply-chains",
        "https://www.freightwaves.com/news/category/the-future-of-freight",
        "https://www.freightwaves.com/blockchain",
        "https://www.freightwaves.com/news/trucking/risk-compliance",
        "https://www.freightwaves.com/news/business/legal-issues",
        "https://www.freightwaves.com/news/insights/sustainability",
        "https://www.freightwaves.com/company-earnings",
        "https://www.freightwaves.com/driver-issues",
        "https://www.freightwaves.com/news/american-shipper/trade-compliance",
        "https://www.freightwaves.com/autonomous-future",
        "https://www.freightwaves.com/insurance-and-risk-management",
        "https://www.freightwaves.com/optimizing-fleet-compliance",
        "https://www.freightwaves.com/recruiting-rundown",
        "https://www.freightwaves.com/smarter-capacity",
        "https://www.freightwaves.com/the-future-of-logistics",
        "https://www.freightwaves.com/flatbed-spotlight",
        "https://www.freightwaves.com/capacity-management",
        "https://www.freightwaves.com/reinventing-freight-procurement",
        "https://www.freightwaves.com/news/category/news/insight/freight-all-kinds",
        "https://www.freightwaves.com/news/category/railroad",
        "https://www.freightwaves.com/truckload",
        "https://www.freightwaves.com/news/trucking/regulation",
        "https://www.freightwaves.com/news/category/trucking/last-mile",
        "https://www.freightwaves.com/news/category/modes/trucking/oem",
        "https://www.freightwaves.com/news/trucking/equipment",
        "https://www.freightwaves.com/news/trucking/ltl",
        "https://www.freightwaves.com/news/trucking/parcel",
        "https://www.freightwaves.com/news/american-shipper/shipping",
        "https://www.freightwaves.com>fo/news/maritime/container",
        "https://www.freightwaves.com/airforwarders-freightwaves",
        "https://www.freightwaves.com/borderlands-mexico",
        "https://www.freightwaves.com/markets/canada",
        "https://www.freightwaves.com/white-papers",
        "https://www.freightwaves.com/news/category/news/markets/market-update",
        "https://www.freightwaves.com/news/insights/chart-of-the-week",
        "https://www.freightwaves.com/news/american-shipper/shippers-perspective",
        "https://www.freightwaves.com/news/category/news/insights/pricing-power-index",
        "https://www.freightwaves.com/news/category/news/insight/energy",
        "https://www.freightwaves.com/news/category/fuel",
        "https://www.freightwaves.com/news/category/insights/weather",
        "https://www.freightwaves.com/news/category/resources/release-notes",
        "https://www.freightwaves.com/subscribe",
        "https://www.freightwaves.com/freightwaves-daily",
        "https://www.freightwaves.com/american-shipper-daily",
        "https://www.freightwaves.com/thestockout",
        "https://www.freightwaves.com/pos",
        "https://www.freightwaves.com/transmission",
        "https://www.freightwaves.com/running-on-ice",
        "https://www.freightwaves.com/wtt",
        "https://www.freightwaves.com/nzc",
        "https://www.freightwaves.com/check-call",
        "https://www.freightwaves.com/loaded-and-rolling",
        "https://www.freightwaves.com/events/category/freightwaves-webinar"
    ];
}

const selector = {
    title: "#the-post .post-title.entry-title",
    subtitle: "#the-post .entry-sub-title",
    author: "#single-post-meta > span.author-meta.single-author.with-avatars > span > span.meta-author > a",
    date: "#single-post-meta > span.date.meta-item.tie-icon",
    banner: "#the-post > div.featured-area > div > figure > img",
    caption: "#the-post > div.featured-area > div > figure > figcaption",
    content: "#the-post > div.entry-content.entry.clearfix"
}

async function crawlFreightWaves() {
    const browser: Browser = await getBrowser();
    const visitingHistory: Set<string> = new Set();
    const listMeta: Array<any> = [];
    const filedir: string = path.resolve(__dirname, "../../articles/freightwaves");
    await fs.ensureDir(filedir);

    for await (let index of getIndexes()) {
        const page: Page = await browser.newPage();
        if (visitingHistory.has(index)) {
            continue;
        }

        await page.goto(index);
        visitingHistory.add(index);
        await page.waitForSelector(".slide a");
        await page.waitForSelector(".post-item a");

        const slide: Array<ElementHandle<HTMLElement>> = await page.$$(".slide a");
        const post: Array<ElementHandle<HTMLElement>> = await page.$$(".post-item");
        const anchors: Array<ElementHandle<HTMLAnchorElement>> = slide.concat(post);

        for await (let anchor of anchors) {
            try {
                const href: string = await page.evaluate(ele => ele.getAttribute("href"), anchor);
                if (visitingHistory.has(href)) {
                    continue;
                }

                console.log("  Crawling " + colors.green(href));
                const newPage: Page = await browser.newPage();
                await newPage.goto(href);
                await newPage.waitForSelector("article#the-post");

                const title: string = await newPage.$eval(selector.title, e => e.textContent);
                const subtitle: string = await newPage.$eval(selector.subtitle, e => e.textContent).catch(e => Promise.resolve(""));
                const author: string = await newPage.$eval(selector.author, e => e.textContent);
                const date: string = await newPage.$eval(selector.date, e => e.textContent);
                const banner: string = await newPage.$eval(selector.title, e => e.getAttribute("src"));
                const caption: string = await newPage.$eval(selector.caption, e => e.textContent).catch(e => Promise.resolve(""));
                const content: string = await newPage.$eval(selector.content, e => e.innerHTML);

                const filename: string = (href.split("/").reverse())[0];
                const filepath: string = path.resolve(filedir, filename + ".json");

                await fs.writeJson(
                    filepath,
                    {
                        url: href,
                        title,
                        subtitle,
                        author,
                        date,
                        thumbnail: banner,
                        caption,
                        content
                    }
                );

                listMeta.push({
                    url: href,
                    title,
                    subtitle,
                    author,
                    date,
                    thumbnail: banner,
                    caption
                })

                await newPage.close();
            } catch (e) {
                console.log(e);
            }
        }
    }

    await fs.writeJson(
        path.resolve(filedir, "index.json"),
        listMeta
    );
    await browser.close();
}

export { crawlFreightWaves }

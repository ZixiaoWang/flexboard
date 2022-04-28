import puppeteer, { Browser, Page } from "puppeteer";
export interface Cache {
    browser: Browser | null,
    page: Page | null,
}

const cache: Cache = {
    browser: null,
    page: null
};

export async function initCache() {
    if (!cache.browser) {
        cache.browser = await puppeteer.launch();
    }
    if (!cache.page) {
        cache.page = await cache.browser.newPage();
    }

    return true;
}

export async function getBrowser(force: boolean = false): Promise<Browser> {
    await initCache();
    if (force) {
        cache.browser!.close();
        cache.browser = await puppeteer.launch();
    }
    return cache.browser as Browser;
}

export async function getPage(force: boolean = false): Promise<Page> {
    await initCache();
    if (force) {
        cache.page!.close();
        cache.page = await cache.browser!.newPage();
    }
    return cache.page as Page;
}
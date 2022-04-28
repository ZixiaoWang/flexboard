import colors from "colors";
import { getBrowser } from "./cache";

import { ITEMS } from "./indices";
import { task } from "./task";

export async function crawl() {
    const items = ITEMS;

    for await (let item of items) {
        await task(item);
        console.log(colors.green(item.text) + " has finished");
    }

    const browser = await getBrowser();
    browser.close();
}
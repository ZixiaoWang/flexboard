import { ElementHandle, Page } from "puppeteer";
import path from "path";
import fs from "fs-extra";

import { getPage } from "./cache";
import { IndicItem } from "./indices";

export async function task(item: IndicItem) {
    const page: Page = await getPage();

    await page.goto(item.href);
    await page.waitForSelector("table.indiceslist");
    const table: ElementHandle<HTMLTableElement> | null = await page.$("table.indiceslist");
    if (!table) return [];

    const trs = await table.$$("tr");
    const rows = [];

    for await (let tr of trs) {
        const row = [];
        const cells = await tr.$$("td");
        for await (let cell of cells) {
            const colspan = await page.evaluate(element => element.getAttribute("colspan"), cell) || 0;
            const rowspan = await page.evaluate(element => element.getAttribute("rowspan"), cell) || 0;
            const text = await page.evaluate(element => element.innerText, cell) || "";
            row.push({
                rowspan,
                colspan,
                text
            });
        }
        rows.push(row);
    }

    await fs.writeJSON(
        path.resolve(__dirname, "../../frontend/data/" + item.text + ".json"),
        rows
    );
}
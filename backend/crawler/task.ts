import { ElementHandle, Page } from "puppeteer";

import { getPage } from "./cache";
import { IndicItem } from "./indices";

export interface TaskResultCell {
    tag: string,
    colspan: number,
    rowspan: number,
    text: number
}

export interface TaskResultRow extends Array<TaskResultCell>{};

export interface TaskResult {
    indiceName: string,
    indiceTableMeta: Array<TaskResultRow>,
}

export async function task(item: IndicItem): Promise<TaskResult> {
    const page: Page = await getPage();

    await page.goto(item.href);
    await page.waitForSelector("table.indiceslist");
    const table: ElementHandle<HTMLTableElement> | null = await page.$("table.indiceslist");
    
    if (!table) {
        throw new Error("Cannot find page in " + item.href);
    }

    const trs = await table.$$("tr");
    const rows = [];

    for await (let tr of trs) {
        const row = [];
        const cells = await tr.$$("td");
        for await (let cell of cells) {
            const className = await page.evaluate(element => element.getAttribute("class"), cell) || "";
            const colspan = await page.evaluate(element => element.getAttribute("colspan"), cell) || 0;
            const rowspan = await page.evaluate(element => element.getAttribute("rowspan"), cell) || 0;
            const text = await page.evaluate(element => element.innerText, cell) || "";

            let tag: string = "td";
            if (["listtitle", "list_head"].includes(className)) {
                tag = "th";
            }

            row.push({
                tag,
                rowspan,
                colspan,
                text
            });
        }
        rows.push(row);
    }

    return {
        indiceName: item.text,
        indiceTableMeta: rows,
    }
}
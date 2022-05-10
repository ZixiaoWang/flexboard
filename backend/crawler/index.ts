import colors from "colors";
import fs from "fs-extra";
import path from "path";
import { getBrowser } from "./cache";

import { ITEMS } from "./indices";
import { task, TaskResult, TaskResultRow } from "./task";

export interface ShanghaiFreightIndices {
    [key: string]: Array<TaskResultRow>,
}

export async function crawl() {
    const items = ITEMS;
    const shanghaiFreightIndices: ShanghaiFreightIndices = {};

    for await (let item of items) {
        const result: TaskResult = await task(item);
        shanghaiFreightIndices[result.indiceName] = result.indiceTableMeta;
        console.log("  " + colors.green("[OK]") + " " + item.text + " has finished");
    }

    const date: string = new Date().toISOString().split("T")[0].replace(/-/g, '');
    const fileDir: string = path.resolve(__dirname, "../../data/indices/" + date + ".js");
    const fileContent: string = `(() => {` +
    `if (!window.shanghaiFreightIndices) {` +
        `window.shanghaiFreightIndices = new Map();` + 
        `}` +
        `window.shanghaiFreightIndices.set("${date}", ${JSON.stringify(shanghaiFreightIndices)});` +
    `})();`;

    await fs.ensureFile(fileDir);
    await fs.writeFile(
        fileDir,
        fileContent,
        { encoding: "utf8" }
    );

    const browser = await getBrowser();
    browser.close();
}

export * from "./freightwaves";
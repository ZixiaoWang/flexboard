const p = require("puppeteer");

async function main() {
    const browser = await p.launch();
    const page = await browser.newPage();
    
    await page.goto("https://en.sse.net.cn/indices/gcspi_port.jsp");
    await page.waitForSelector("table.indiceslist");
    const table = await page.$("table.indiceslist");
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

    console.log("trs found: " + trs.length);
    console.log(rows);
    browser.close();
}

main();
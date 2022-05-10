import { crawl, crawlFreightWaves } from "./crawler";
import colors from "colors";

async function main() {
    console.log("Crawling start!");
    console.log("==============================");
    console.log(colors.cyan("Crawling Indices from Shanghai Shipping Exchange"));
    await crawl();
    console.log("------------------------------");
    console.log(colors.cyan("Crawling articles from Freight Waves"));
    await crawlFreightWaves();
    console.log("==============================");
}

main();
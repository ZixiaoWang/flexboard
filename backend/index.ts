import { crawl, crawlFreightWaves } from "./crawler";
import colors from "colors";

async function main() {
    console.log("Crawling start!");
    console.log("==============================");
    // await crawl();
    await crawlFreightWaves();
    console.log("==============================");
}

main();
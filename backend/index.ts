import { crawl } from "./crawler";

async function main() {
    console.log("Crawling start!");
    console.log("==============================");
    await crawl();
}

main();
const fs = require('fs-extra');
const path = require('path');

const data_dir = path.resolve(__dirname, "../data");
const freight_waves_news_dir = path.resolve(data_dir, "articles/freightwaves");
const manifest_dir = path.resolve(data_dir, "manifest.json");

(async function () {
    const article_meta = [];
    const articles = await fs.readdir(freight_waves_news_dir);
    
    for await (let article of articles) {
        const content = await fs.readJSON(path.resolve(freight_waves_news_dir, article));
        article_meta.push({
            source: "Freight Waves",
            url: content.url,
            title: content.title,
            date: content.date,
            thumbnail: content.thumbnail
        })
    }

    await fs.writeJson(manifest_dir, {
        articles: article_meta
    });
})()
const fs = require('fs-extra');
const path = require('path');

const data_dir = path.resolve(__dirname, "../data");
const freight_waves_news_dir = path.resolve(data_dir, "articles/freightwaves");
const manifest_dir = path.resolve(data_dir, "manifest.json");
const rss_json_file = path.resolve(data_dir, "rss.json");

(async function () {
    const article_meta = [];
    const articles = await fs.readdir(freight_waves_news_dir);
    let i = 1;
    
    for await (let article of articles) {
        const content = await fs.readJSON(path.resolve(freight_waves_news_dir, article));
        article_meta.push({
            index: i,
            source: "Freight Waves",
            url: content.url,
            title: content.title,
            date: content.date,
            thumbnail: content.thumbnail,
            detailurl: "data/articles/freightwaves/" + article
        });

        i++;
    }

    const rssFeed = await fs.readJSON(rss_json_file);
    for await (let rss of rssFeed) {
        article_meta.push({
            index: i,
            source: rss.source,
            url: rss.url,
            title: rss.title,
            date: rss.date,
            thumbnail: rss.thumbnail,
            detailurl: rss.detailurl
        });

        i++;
    }

    article_meta.sort(function(a,b){
        // Turn your strings into dates, and then subtract them
        // to get a value that is either negative, positive, or zero.
        return new Date(b.date) - new Date(a.date);
      });
      

    await fs.writeJson(manifest_dir, {
        articles: article_meta
    });
})()
const fs = require('fs-extra');
const path = require('path');

const data_dir = path.resolve(__dirname, "../data");
const freight_waves_news_dir = path.resolve(data_dir, "articles/freightwaves");
const the_load_star_news_dir = path.resolve(data_dir, "articles/theloadstar");
const joc_news_dir = path.resolve(data_dir, "articles/joc");
const manifest_dir = path.resolve(data_dir, "manifest.json");
const rss_json_file = path.resolve(data_dir, "rss.json");

(async function () {    
    const freight_waves_articles = await fs.readdir(freight_waves_news_dir);
    let i = 1;
    const freight_waves_meta = []
    for await (let article of freight_waves_articles) {
        const content = await fs.readJSON(path.resolve(freight_waves_news_dir, article));
        freight_waves_meta.push({
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


    const the_load_star_articles = await fs.readdir(the_load_star_news_dir);
    const the_load_star_meta = []
    for await (let article of the_load_star_articles) {
        const content = await fs.readJSON(path.resolve(the_load_star_news_dir, article));
        the_load_star_meta.push({
            index: i,
            source: "The Load Star",
            url: content.url,
            title: content.title,
            date: content.date,
            thumbnail: content.thumbnail,
            detailurl: "data/articles/theloadstar/" + article
        });

        i++;
    }


    const joc_articles = await fs.readdir(joc_news_dir);
    const joc_meta = []
    for await (let article of joc_articles) {
        const content = await fs.readJSON(path.resolve(joc_news_dir, article));
        if (content.thumbnail.length === 0) {
            continue;
        }
        joc_meta.push({
            index: i,
            source: "JOC",
            url: content.url,
            title: content.title,
            date: content.date,
            thumbnail: content.thumbnail,
            detailurl: "data/articles/joc/" + article
        });

        i++;
    }

    const rss_meta = []
    const rssFeed = await fs.readJSON(rss_json_file);
    for await (let rss of rssFeed) {
        rss_meta.push({
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

    function sortByDate(a,b){
        return new Date(b.date) - new Date(a.date);
    }

    freight_waves_meta.sort(sortByDate);
    the_load_star_meta.sort(sortByDate);
    rss_meta.sort(sortByDate);
    
    const first_half_meta = freight_waves_meta.slice(0, 10).concat(the_load_star_meta.slice(0, 10)).sort((a, b) => 0.5 - Math.random())

    const article_meta = first_half_meta.concat(joc_meta.slice(0, 10), rss_meta.slice(0, 3));


    await fs.writeJson(manifest_dir, {
        articles: article_meta
    });
})()
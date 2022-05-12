const {PythonShell} =require('python-shell');
const fs = require('fs-extra');
const path = require('path');

const data_dir = path.resolve(__dirname, "../data");
const freight_waves_news_dir = path.resolve(data_dir, "articles/freightwaves");
const the_load_star_news_dir = path.resolve(data_dir, "articles/theloadstar");
const joc_news_dir = path.resolve(data_dir, "articles/joc");

PythonShell.run('backend/python/RssSubscriber.py', null, function (err) {
    if (err) throw err;
    console.log('finished running RssSubscriber.py');
});

fs.emptyDirSync(the_load_star_news_dir)
fs.emptyDirSync(joc_news_dir)


PythonShell.run('backend/python/JOCScraper.py', null, function (err) {
    if (err) throw err;
    console.log('finished running JOCScraper.py');
});



PythonShell.run('backend/python/LSScraper.py', null, function (err) {
    if (err) throw err;
    console.log('finished running LSScraper.py');
});


function deleteDir(dir) {
    fs.rmdir(dir, { recursive: true }, (err) => {
        if (err) {
            console.log(err);
        }

        console.log(`${dir} is deleted!`);
    });
}

function mkdir(dir) {
    if (!fs.existsSync(dir)){
        fs.mkdir(dir);
        console.log(`${dir} is created!`);
    }
}

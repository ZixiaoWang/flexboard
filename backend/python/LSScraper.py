from urllib import response
import requests
from bs4 import BeautifulSoup
import json
from datetime import datetime
import re
import os

news_list = []

sources = [
    "https://theloadstar.com/category/air",
    "https://theloadstar.com/category/sea",
    "https://theloadstar.com/category/land",
    "https://theloadstar.com/category/supply-chain",
]

target_dir = os.path.realpath(os.path.join(os.path.dirname(__file__), '..', '..', 'data', 'articles', 'theloadstar'))

for source in sources:
    response = requests.get(source)
    soup = BeautifulSoup(response.content, features="xml")
    list = soup.find_all("article", {"class": "card pad"})
    for e in list:
        a = e.find("a", href=True)
        url = a['href']
        head = e.find("div", {"class": "article-head"})
        thumbnail = re.findall('url\(\'(.*?)\'\)|$', head['style'])[0]
        article_response = requests.get(url)

        article_soup = BeautifulSoup(article_response.content, features="xml")
        article = article_soup.find("article", {"class": None})
        
        author = article.find("address", {"class": "author"}).text.split("By ")[1]

        dateTime = article.find('time').text

        caption = article_soup.find("div", {"class": "caption"})

        article.find("div", {"class": "hero"}).decompose()
        article.find("div", {"class": "post-info"}).decompose()

        entry = {
            "url": url,
            "title" : a['title'],
            "thumbnail": thumbnail,
            "author": author,
            "date": dateTime,
            "thumbnail": thumbnail,
            "caption": "" if caption is None else caption.text,
            "content": str(article)
        }

        frags = url.split('/')
        frags.reverse()
        filename = next(s for s in frags if (len(s) > 0)) + ".json"
        completeFilename = os.path.join(target_dir, filename)
        jsonString = json.dumps(entry)
        jsonFile = open(completeFilename, "w")
        jsonFile.write(jsonString)
        jsonFile.close()

        print(filename)

import os
from urllib import response
import requests
from bs4 import BeautifulSoup
import json
from datetime import datetime

news_list = []

sources = {
    # "JOC": "https://www.joc.com/rssfeed",
    "WSJ World": "https://feeds.a.dj.com/rss/RSSWorldNews.xml",
    "WSJ US Busisness": "https://feeds.a.dj.com/rss/WSJcomUSBusiness.xml",
    "WSJ Market": "https://feeds.a.dj.com/rss/RSSMarketsMain.xml",
    "WSJ Market": "https://feeds.a.dj.com/rss/RSSWSJD.xml",
}

index =  112
for key in sources:
    url = sources[key]
    response = requests.get(url)
    soup = BeautifulSoup(response.content, features="xml")
    for item in soup.find_all("item"):
        news = {
            "index": index,
            "source": key,
            "title": item.title.text.strip(),
            "url": item.link.text,
            "date": datetime.strptime(item.pubDate.text, "%a, %d %b %Y %H:%M:%S %z").strftime("%A, %B %d, %Y"),
            "thumbnail": item.description.img['src'] if item.description.img is not None else "" ,
            "detailurl": item.link.text,
        }
        news_list.append(news)
        index += 1
        
print(len([e for e in news_list if e["thumbnail"]]))

filename = os.path.realpath(os.path.join(os.path.dirname(__file__), '..', '..', 'data', 'rss.json'))

with open(filename, 'w') as f:
    f.write(json.dumps(news_list, ensure_ascii=False))

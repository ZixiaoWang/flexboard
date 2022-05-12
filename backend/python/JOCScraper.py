from urllib import response
import requests
from bs4 import BeautifulSoup
import json
from datetime import datetime
import os

url = "https://www.joc.com/rssfeed"
response = requests.get(url)
soup = BeautifulSoup(response.content, features="xml")

target_dir = os.path.realpath(os.path.join(os.path.dirname(__file__), '..', '..', 'data', 'articles', 'joc'))
for item in soup.find_all("item"):
    arcticleUrl = item.link.text
    arcticleResponse = requests.get(arcticleUrl)
    arcticleSoup = BeautifulSoup(arcticleResponse.content, features="lxml")
    div1 = arcticleSoup.find("div", {"id": "panel-pane--2"})
    div2 = arcticleSoup.find("div", {"id": "panel-pane--3"})
    authorA = arcticleSoup.find("a", rel="author")
    author = "" if authorA is None else authorA.text
    title = item.title.text.strip()
    print(author)
    entry = {
        "url": arcticleUrl,
        "title": title ,
        "thumbnail": item.description.img['src'] if item.description.img is not None else "" ,
        "author": author,
        "date": item.pubDate.text,
        "caption": "",
        "content": str(div1) + str(div2)
    }
    
    frags = arcticleUrl.split('/')
    frags.reverse()
    filename = next(s for s in frags if (len(s) > 0)) + ".json"
    completeFilename = os.path.join(target_dir, filename)
    jsonString = json.dumps(entry)
    jsonFile = open(completeFilename, "w")
    jsonFile.write(jsonString)
    jsonFile.close()

    print(filename)

    
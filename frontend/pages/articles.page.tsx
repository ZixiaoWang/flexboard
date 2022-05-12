/// <reference path="../custom.d.ts" />

import { Fragment, h } from "preact";
import { useState, useEffect } from "preact/hooks";
import { userStore, useBookmarkStore } from "../helpers";

import FreightWaves from "../icons/freightwaves.png";
import axios, { AxiosResponse } from "axios";
import { Loader } from "../components";

export interface ArticlePageProps {
    base64url: string,
}

export const ArticlePage = (props: any) => {
    const url: string = window.atob(props.base64url);

    const [loading, setLoading] = useState(true);
    const [article, setArticle] = useState(null);
    const { bookmarkStore } = useBookmarkStore();

    useEffect(() => {
        if (url.startsWith('data')) {
            axios
                .get("/"+url)
                .then((response: AxiosResponse) => {
                    const data = response.data;
                    setArticle(data);
                    setLoading(false);
                });
        } else {
            setLoading(false);
        }
    }, []);

    const back = () => {
        history.back();
    }

    const share = () => {
        window.navigator.share({
            url: article.url,
            title: article.title,
            text: article.caption || article.title
        })
    }

    if (loading) {
        return <Loader />
    }


    return (
        <div className="article">
            <div className="article-actions is-level">
                <div className="is-level-left" onClick={back}>
                    <ion-icon name="chevron-back"></ion-icon>
                </div>
                <div className="is-level-right is-flex is-vertical-center">
                    {
                        window.navigator.share &&
                        <Fragment>
                            <span className="blue40">
                                <ion-icon name="share-outline" onClick={share}></ion-icon>
                            </span>
                            <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
                        </Fragment>
                    }
                    {
                        userStore.isAvailable() && 
                        <Fragment>
                            {
                                bookmarkStore.hasBookmark(article?.url || url) ?
                                <span className="red30">
                                    <ion-icon 
                                        onClick={() => bookmarkStore.toggleBookmark(article?.url || url)}
                                        name="bookmark">
                                    </ion-icon>
                                </span> :
                                <span className="grey40">
                                <ion-icon 
                                    onClick={() => bookmarkStore.toggleBookmark(article?.url || url)}
                                    name="bookmark-outline">
                                </ion-icon>
                            </span>
                            }
                        </Fragment>
                    }
                </div>
            </div>
            {
                url.startsWith('data') ?
                <div>
                    {
                        article.thumbnail &&
                        <div className="article-thumbnail" style={{ backgroundImage: `url(${article.thumbnail})` }}></div>
                    }
                    <div className="article-title">
                        { article.title }
                    </div>
                    <div className="article-label">
                        <div>Author: { article.author }</div>
                        <div>Published at: { article.date }</div>
                    </div>
                    <hr />
                    <div className="article-content" dangerouslySetInnerHTML={{ __html: article.content }}></div>
                    <hr />
                    <div className="article-link">
                        <a href={article.url} target="_blank">
                            <span>Original Source</span>
                            <span>&nbsp;</span>
                            <ion-icon name="arrow-forward-circle"></ion-icon>
                        </a>
                    </div>
                </div> : 
                <div class='iframe-container'>
                    <iframe type="text/html" src={`${url}`} width="100%" height="100%" />
                </div>
            }
            
        </div>
    )
}

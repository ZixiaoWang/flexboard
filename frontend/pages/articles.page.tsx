import { h } from "preact";
import { useState, useEffect } from "preact/hooks";
import { RoutePage } from "../interfaces";

import FreightWaves from "../icons/freightwaves.png";
import axios, { AxiosResponse } from "axios";

export interface ArticlePageProps {
    base64url: string,
}

export const ArticlePage = (props: any) => {
    const url: string = window.atob(props.base64url);

    const [loading, setLoading] = useState(true);
    const [article, setArticle] = useState(null);

    useEffect(() => {
        axios
            .get(url)
            .then((response: AxiosResponse) => {
                const data = response.data;
                setArticle(data);
                setLoading(false);
            })
    }, []);

    const back = () => {
        history.back();
    }

    if (loading) {
        return <div>Loading</div>
    }


    return (
        <div className="article">
            <div className="article-actions is-level">
                <div className="is-level-left" onClick={back}>
                    <ion-icon name="chevron-back"></ion-icon>
                </div>
                <div className="is-level-right is-flex is-vertical-center">
                    <ion-icon name="share-outline"></ion-icon>
                    <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
                    <ion-icon name="bookmark-outline"></ion-icon>
                </div>
            </div>
            <div className="article-reference">
                <img src={FreightWaves} alt="Freight Waves" />
            </div>
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
        </div>
    )
}
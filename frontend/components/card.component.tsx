/// <reference path="../custom.d.ts" />

import { h, VNode, } from "preact";
import { route } from "preact-router";
import { SeedArticleItem } from "../interfaces";
import { useBookmarkStore } from "../helpers";

import WSJ from "../icons/wsj.svg";
import FreightWaves from "../icons/freightwaves.png";
import JOC from "../icons/joc.png";
import loadstar from "../icons/loadstar.png";
export interface CardComponentProps {
    size?: "small" | "medium" | "large",
    seed: SeedArticleItem
}

export const CardComponent = (props: CardComponentProps): VNode => {
    const { bookmarkStore } = useBookmarkStore();
    const seed: SeedArticleItem = props.seed;
    const base64url: string = window.btoa(seed.detailurl);
    let referenceSourceIconSrc = props.seed.source;

    switch(props.seed.source) {
        case('Freight Waves'):
            referenceSourceIconSrc = FreightWaves;
            break;
        case('The Load Star'):
            referenceSourceIconSrc = loadstar;
            break;
        case('JOC'):
            referenceSourceIconSrc = JOC;
            break;
        default: 
            referenceSourceIconSrc = WSJ;
    }

    const cardProps = {
        onClick: () => route(`/seeds/${base64url}`)
    }

    if (props.size === "small") {
        return (
            <div className="card is-small" {...cardProps}>
                {
                    seed.thumbnail ?
                        <div className="card-row">
                            <div className="card-img" style={{ backgroundImage: `url(${seed.thumbnail})` }}></div>
                        </div> :
                        <div className="card-row">
                            <div className="card-img-placeholder">
                                &nbsp;
                            </div>
                        </div>
                }
                <div className="card-row">
                    <div className="card-reference">
                        <img src={referenceSourceIconSrc} alt="Freight Waves" />
                    </div>
                    <div className="blue50 is-text-bold">
                        {seed.title.length > 70 ? (seed.title.substring(0, 70) + "...") : seed.title}
                    </div>
                    <div className="is-text-xs grey40 has-margin-top-1">
                        {seed.date}
                    </div>
                </div>
                <div className="card-row">
                    {
                        bookmarkStore.hasBookmark(seed.url) ?
                            <span className="red30">
                                <ion-icon name="bookmark" />
                            </span> :
                            <span className="grey40">
                                <ion-icon name="bookmark-outline" />
                            </span>
                    }
                    <span>&nbsp;</span>
                </div>
            </div>
        )
    }

    return (
        <div className="card is-large" style={{ backgroundImage: `url(${seed.thumbnail})` }} {...cardProps}>
            <div className="card-row">
                <div className="card-title">
                    <div className="card-reference">
                        <img src={referenceSourceIconSrc} alt="Freight Waves" />
                    </div>
                    <span>{seed.title}</span>
                    <div className="has-padding-top-3">
                        <span className="is-text-s">
                            {seed.date}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

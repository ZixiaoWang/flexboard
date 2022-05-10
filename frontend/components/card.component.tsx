/// <reference path="../custom.d.ts" />

import { h, VNode, } from "preact";
import { route } from "preact-router";
import { SeedArticleItem } from "../interfaces";

import FreightWaves from "../icons/freightwaves.png";
export interface CardComponentProps {
    size?: "small" | "medium" | "large",
    seed: SeedArticleItem
}

export const CardComponent = (props: CardComponentProps): VNode => {
    
    const seed: SeedArticleItem = props.seed;
    console.log(seed)
    const base64url: string = window.btoa(seed.detailurl);

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
                        <img src={FreightWaves} alt="Freight Waves" />
                    </div>
                    <div className="blue50 is-text-bold">
                        { seed.title }
                    </div>
                    <div className="is-text-xs grey40 has-margin-top-1">
                        { seed.date }
                    </div>
                </div>
                <div className="card-row grey40">
                    <ion-icon name="bookmark" />
                    <ion-icon name="calendar" />
                </div>
            </div>
        )
    }

    return (
        <div className="card is-large" style={{ backgroundImage: `url(${seed.thumbnail})` }} {...cardProps}>
            <div className="card-row">
                <div className="card-title">
                    <div className="card-reference">
                        <img src={FreightWaves} alt="Freight Waves" />
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

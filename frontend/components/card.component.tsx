import { h, VNode, } from "preact";
import { route } from "preact-router";

import CNNIcon from "../icons/cnn.svg";
export interface CardComponentProps {
    size?: "small" | "medium" | "large",
    title?: string,
    thumbnail?: string,
    date?: string,
    bookmarked?: boolean,
    read?: boolean,
    id?: string,
}

export const CardComponent = (props: CardComponentProps): VNode => {

    const cardProps = {
        onClick: () => route(`/seeds/${props.id}`)
    }

    if (props.size === "small") {
        return (
            <div className="card is-small" {...cardProps}>
                <div className="card-row">
                    <div className="card-img">
                        <img src="http://placekitten.com/160/160" alt="cat" />
                    </div>
                </div>
                <div className="card-row">
                    <div className="blue50">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia, excepturi.
                    </div>
                    <div className="is-text-xs grey40">
                        24 Feb, 2022
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
        <div className="card is-large" style={{ backgroundImage: `url("http://placekitten.com/320/319")` }} {...cardProps}>
            <div className="card-row">
                <div className="card-title">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis harum repellendus dignissimos amet temporibus!
                    <div className="has-padding-top-3">
                        <span className="is-text-s">
                            25 Mar, 2022
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

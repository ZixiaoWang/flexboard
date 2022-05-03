import { h, VNode,  } from "preact";
import { route } from "preact-router";
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
                <div className="card-row">
                    <ion-icon name="bookmark-outline" />
                    <ion-icon name="calendar-outline" />
                </div>
            </div>
        )
    }

    return (
        <div className="card" {...cardProps}>
            <div className="card-row has-padding-vertical-2">
                <span className="grey40 is-text-s">
                    label
                </span>
            </div>
            <div className="card-row">
                <div className="card-img">
                    <img src="http://placekitten.com/160/160" alt="cat" />
                </div>
            </div>
            <div className="card-row has-padding-vertical-2">
                <div className="card-title">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis harum repellendus dignissimos amet temporibus!
                </div>
            </div>
        </div>
    )
}

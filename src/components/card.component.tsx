import { h } from "preact";

export const CardComponent = () => {
    return (
        <div className="card">
            <div className="card-row has-padding-vertical-2">
                <span className="grey40 is-text-s">
                    label
                </span>
            </div>
            <div className="card-row">
                <div className="card-img">
                    <img src="http://placekitten.com/160/90" alt="cat" />
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

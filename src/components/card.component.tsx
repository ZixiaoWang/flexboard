import { h } from "preact";

export const CardComponent = () => {
    return (
        <div className="card">
            <div className="card-row has-padding-2">
                <span className="grey40 is-text-s">
                    label
                </span>
            </div>
            <div className="card-row">
                <div className="card-img">
                    <img src="http://placekitten.com/160/90" alt="cat" />
                </div>
            </div>
            <div className="card-row has-padding-2">
                <div className="card-title grey50">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat quas vel ea voluptatem sapiente!
                </div>

            </div>
        </div>
    )
}

import { h } from "preact";

export const Loader = (props: any) => {
    return (
        <div className="loader">
            <div className="logo-icon">
                <div className="logo-card is-red"></div>
                <div className="logo-card is-white"></div>
                <div className="logo-card is-green"></div>
            </div>
            <div className="white has-margin-top-2">
                { props.children || "Loading..." }
            </div>
        </div>
    )
}

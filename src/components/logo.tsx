import { h } from "preact";

export const LogoComponent = () => {

    return (
        <div className="logo-container">
            <div className="logo-icon">
                <div className="logo-card is-red"></div>
                <div className="logo-card is-blue"></div>
                <div className="logo-card is-green"></div>
            </div>
            <div className="logo-text">
                <div>FlexBoard</div>
                <div className="is-text-xs grey40">A Hackthon Project</div>
            </div>
        </div>
    )
}

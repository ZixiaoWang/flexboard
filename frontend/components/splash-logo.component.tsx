import { h } from "preact";

export const SplashLogoComponent = () => {

    return (
        <div className="logo-container" id="splashlogo">
            <div className="logo-icon">
                <div className="logo-card is-red"></div>
                <div className="logo-card is-white"></div>
                <div className="logo-card is-green"></div>
            </div>
            <div className="logo-text white">
                <div>
                    <span>Flexboard</span>
                    <span className="red40">.</span>
                </div>
                <div className="is-text-xs grey40">
                    The news forwarder
                </div>
            </div>
        </div>
    )
}

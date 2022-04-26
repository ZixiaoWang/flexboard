import { h } from "preact";

export const SplashLogoComponent = () => {

    return (
        <div className="logo-container">
            <div className="logo-icon">
                <div className="logo-card is-red"></div>
                <div className="logo-card is-blue"></div>
                <div className="logo-card is-green"></div>
            </div>
            <div className="logo-text grey50">
                <div>
                    <span>Flexboard</span>
                    <span className="red40">.</span>
                </div>
                <div className="is-text-xs grey30">
                    The news forwarder
                </div>
            </div>
        </div>
    )
}

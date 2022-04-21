import { h } from "preact";
import { HeaderComponent } from "../components";
import { RoutePage } from "../interfaces";

export const SettingsPage = (props: RoutePage) => {
    return (
        <div className="page">
            <div className="setting-group">
                <div className="setting-item">
                    Account
                </div>
                <div className="setting-item">
                    Language
                </div>
            </div>
            <div className="setting-group">
                <div className="setting-item">
                    About Flexboard
                </div>
            </div>
            <HeaderComponent>
                Settings
            </HeaderComponent>
        </div>
    )
}
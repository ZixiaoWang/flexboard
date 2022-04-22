import { Fragment, h } from "preact";
import { RoutePage } from "../interfaces";

export const SettingsPage = (props: RoutePage) => {
    return (
        <Fragment>
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
        </Fragment>
    )
}
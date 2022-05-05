import { Fragment, h } from "preact";
import { route } from "preact-router";
import { RoutePage } from "../interfaces";

export const SettingsPage = (props: RoutePage) => {
    return (
        <Fragment>
            <div className="setting-group">
                <div className="setting-item">
                    Account
                </div>
                <div className="setting-item"
                    onClick={() => route("/about")}
                    onKeydown={() => route("/about")}>
                    About Flexboard
                </div>
            </div>
        </Fragment>
    )
}
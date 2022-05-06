import { Fragment, h } from "preact";
import { route } from "preact-router";
import { RoutePage } from "../interfaces";

export const SettingsPage = (props: RoutePage) => {
    return (
        <Fragment>
            <div className="setting-group">
                <div className="setting-item">
                    <ion-icon name="person-circle-sharp"></ion-icon>
                    <span>Account</span>
                </div>
                <div className="setting-item">
                    <ion-icon name="bookmarks-sharp"></ion-icon>
                    <span>My bookmarks</span>
                </div>
                <div className="setting-item"
                    onClick={() => route("/about")}
                    onKeydown={() => route("/about")}>
                        <ion-icon name="heart-sharp"></ion-icon>
                    <span>About Flexboard</span>
                </div>
            </div>
        </Fragment>
    )
}
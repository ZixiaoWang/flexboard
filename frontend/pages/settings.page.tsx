import { Fragment, h } from "preact";
import { route } from "preact-router";
import { useEffect } from "preact/hooks";
import { userStore, useGoogleAuth } from "../helpers";
import { RoutePage } from "../interfaces";

declare global {
    interface Window {
        google: any,
        onGoogleSignInSuccess: () => void
    }
}

export const SettingsPage = (props: RoutePage) => {
    const {googleAuth, nounce} = useGoogleAuth();

    useEffect(() => {
        if (window.google) {
            if (userStore.hasCache()) {
                if (userStore.isExpired()) {
                    googleAuth.prompt();
                } else {
                    // googleAuth.prompt();
                }
            } else {
                googleAuth.renderButton();
                googleAuth.prompt();
            }
        }
    }, []);

    const logout = () => {
        if(window.confirm("Are you sure you want to logout?")) {
            userStore.clear();
            location.reload();
        }
    }

    return (
        <Fragment>
            <div className="setting-group" key={nounce}>
                {
                    (userStore.hasCache() && userStore.isExpired() === false) ?
                        <div className="setting-userinfo">
                            <div className="setting-avatar">
                                <img src={userStore.cache.picture} alt={userStore.cache.name} />
                            </div>
                            <div className="has-margin-top-5">
                                <div className="is-text-xl grey10">
                                    {userStore.cache.name}
                                </div>
                                <div className="is-text-s grey20">
                                    {userStore.cache.email}
                                </div>
                            </div>
                        </div> :
                        <div className="setting-google-btn-container" id="gbuttondiv"></div>
                }
            </div>
            <div className="setting-group">
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
                <div className="setting-item"
                    onClick={() => route("/about")}
                    onKeydown={() => route("/about")}>
                    <ion-icon name="alert-sharp"></ion-icon>
                    <span>Declaration</span>
                </div>
            </div>
            {
                userStore.hasCache() &&
                <div className="setting-group" key={nounce}>
                    <div 
                        className="has-padding-vertical-3 is-flex is-all-center red30"
                        onClick={logout}
                        onKeydown={logout}>
                        <ion-icon name="log-out-sharp" className="is-text-l"></ion-icon>
                        <span>&nbsp;&nbsp;</span>
                        <span className="is-text-m">Logout</span>
                    </div>
                </div>
            }
        </Fragment>
    )
}
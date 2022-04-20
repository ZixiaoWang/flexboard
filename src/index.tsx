import { Fragment, h, render } from "preact";
import Router from "preact-router";
import { createHashHistory } from "history";

import { TabsComponent } from "./components";
import { BookmarksPage, Redirect, SearchPage, SeedsPage, SettingsPage, SplashPage } from "./pages";
/** @jsx h */

import "./styles/main.scss"

interface IonIconAttributes extends preact.JSX.HTMLAttributes<HTMLElement> {
    name: string,
    src?: string,
}

declare module 'preact' {
    namespace JSX {
        interface IntrinsicElements {
            'ion-icon': IonIconAttributes
        }
    }
}

const App = () => {
    const hashHistory = createHashHistory();
    const renderSplashPage = () => {
        return <SplashPage />
    }

    return (
        <Fragment>
            <TabsComponent />
            <div className="is-full-screen is-all-center">
                {/* @ts-ignore */}
                <Router history={hashHistory}>
                    <SeedsPage path="/seeds" />
                    <SearchPage path="/search" />
                    <BookmarksPage path="/bookmarks" />
                    <SettingsPage path="/settings" />
                    <Redirect default to="/seeds" />
                </Router>
            </div>
        </Fragment>
    )
}

render(
    <App />,
    document.getElementById("root") as any
);
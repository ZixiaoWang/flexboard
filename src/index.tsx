import { Fragment, h, render } from "preact";
import { useState, useEffect } from "preact/hooks";
import Router from "preact-router";
import { createHashHistory } from "history";

import { HeaderComponent, TabsComponent } from "./components";
import { IndicesPage, MessagesPage, Redirect, SearchPage, SeedsPage, SettingsPage, SplashPage } from "./pages";
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
    const [splashVisibility, setSplashVisibility] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setSplashVisibility(false);
        }, Math.round(Math.random() * 100));
    }, [])

    if (splashVisibility) {
        return <SplashPage />
    }

    return (
        <Fragment>
            <TabsComponent />
            <div className="container">
                <div className="page">
                    {/* @ts-ignore */}
                    <Router history={hashHistory}>
                        <SeedsPage path="/seeds" />
                        <SearchPage path="/search" />
                        <IndicesPage path="/indices" />
                        <MessagesPage path="/messages" />
                        <SettingsPage path="/settings" />
                        <Redirect default to="/seeds" />
                    </Router>
                <HeaderComponent />
                </div>
            </div>
        </Fragment>
    )
}

render(
    <App />,
    document.getElementById("root") as any
);
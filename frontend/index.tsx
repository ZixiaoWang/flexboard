import { Fragment, h, render } from "preact";
import { useState, useEffect } from "preact/hooks";
import Router from "preact-router";
import { createHashHistory } from "history";

import { HeaderComponent, TabsComponent } from "./components";
import { ArticlePage, IndicesPage, MessagesPage, Redirect, SearchPage, SeedsPage, SettingsPage, SplashPage, Route } from "./pages";
/** @jsx h */

import "./styles/main.scss"

declare module 'preact' {
    namespace JSX {
        interface IntrinsicElements {
            'ion-icon': IonIconAttributes
        }
    }
}
interface IonIconAttributes extends preact.JSX.HTMLAttributes<HTMLElement> {
    name: string,
    src?: string,
}

interface HomePageProps {
    path?: string,
    rest?: string,
}

const HOME_ROUTES = [
    "seeds",
    "search",
    "indices",
    "messages",
    "settings"
]

const Home = (props: HomePageProps) => {
    const { rest } = props;
    return (
        <Fragment>
        <TabsComponent />
        <div className="container">
            <div className="page">
                {rest === "seeds" && <SeedsPage />}
                {rest === "search" && <SearchPage />}
                {rest === "indices" && <IndicesPage />}
                {rest === "messages" && <MessagesPage />}
                {rest === "settings" && <SettingsPage />}
                {HOME_ROUTES.includes(rest || "") === false && <Redirect default to="/seeds" />}
                <HeaderComponent />
            </div>
        </div>
    </Fragment>
    )
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
            {/* @ts-ignore */}
            <Router history={hashHistory}>
                <ArticlePage path="/seeds/:id" />
                <Home path="/:rest*" />
            </Router>
        </Fragment>
    )
}

render(
    <App />,
    document.getElementById("root") as any
);
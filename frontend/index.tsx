/// <reference path="custom.d.ts" />

import { Fragment, h, render } from "preact";
import { useState, useEffect } from "preact/hooks";
import Router from "preact-router";
import { createHashHistory } from "history";

import { HeaderComponent, TabsComponent } from "./components";
import { ArticlePage, IndicesPage, MessagesPage, Redirect, SearchPage, SeedsPage, SettingsPage, SplashPage, Route, AboutPage } from "./pages";
/** @jsx h */

import "./styles/main.scss";

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

    const loadingTime: number = Math.round(Math.random() * 2500);
    useEffect(() => {
        setTimeout(() => {
            const splashLogo: HTMLElement | null = document.getElementById("splashlogo");
            if (splashLogo) {
                splashLogo.classList.add("is-fading");
            }
        }, loadingTime);
        setTimeout(() => {
            setSplashVisibility(false);
        } ,loadingTime + 500);
    }, [])

    if (splashVisibility) {
        return <SplashPage />
    }

    return (
        <Fragment>
            {/* @ts-ignore */}
            <Router history={hashHistory}>
                <ArticlePage path="/seeds/:id" />
                <AboutPage path="/about" />
                <Home path="/:rest*" />
            </Router>
        </Fragment>
    )
}

render(
    <App />,
    document.getElementById("root") as any
);
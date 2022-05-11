/// <reference path="custom.d.ts" />

import { Fragment, h, render } from "preact";
import { useState, useEffect } from "preact/hooks";
import Router from "preact-router";
import { createHashHistory } from "history";

import { useSeedsStore } from "./helpers";
import { HeaderComponent, QRCode, TabsComponent } from "./components";
import { ArticlePage, IndicesPage, MessagesPage, Redirect, SearchPage, SeedsPage, SettingsPage, SplashPage, Route, AboutPage, DisclaimerPage, BookmarksPage, IndicesListPage, FlexportIndicatorPage } from "./pages";
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
                {rest === "indices" && <IndicesListPage />}
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
    const [isMobile, setIsMobile] = useState(window.innerWidth < 576);
    const {getSeeds} = useSeedsStore();

    const loadingTime: number = Math.round(Math.random() * 200);

    const resizeHandler = () => {
        if (location.hash !== "#/indices") {
            if (window.innerWidth < 570) {
                setIsMobile(true);
            } else {
                setIsMobile(false)
            }
        }
    }

    useEffect(() => {
        window.addEventListener("resize", resizeHandler);

        getSeeds().then(() => {
            setTimeout(() => {
                const splashLogo: HTMLElement | null = document.getElementById("splashlogo");
                if (splashLogo) {
                    splashLogo.classList.add("is-fading");
                }
            }, loadingTime);
            setTimeout(() => {
                setSplashVisibility(false);
            } ,loadingTime + 500);
        });

        return () => {
            window.removeEventListener("resize", resizeHandler);
        }
    }, []);

    if (isMobile === false) {
        return <QRCode />
    }

    if (splashVisibility) {
        return <SplashPage />
    }

    return (
        <Fragment>
            {/* @ts-ignore */}
            <Router history={hashHistory}>
                <ArticlePage path="/seeds/:base64url" />
                <DisclaimerPage path="/disclaimer" />
                <BookmarksPage path="/bookmarks" />
                <IndicesPage path="/indices/shanghai-exchange" />
                <FlexportIndicatorPage path="/indices/flexport-indicator" />
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
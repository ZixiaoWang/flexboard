import { Fragment, h, render } from "preact";

import { LogoComponent } from "./components";

import "./styles/main.scss"

const App = () => {

    return (
        <Fragment>
            <div className="is-full-screen is-all-center">
                <LogoComponent />
            </div>
        </Fragment>
    )
}

render(
    <App />,
    document.getElementById("root") as any
);
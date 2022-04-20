import { h } from "preact";
import { LogoComponent } from "./logo.component";

export const HeaderComponent = () => {

    return (
        <div className="header">
            <div className="header-logo">
                <LogoComponent />
            </div>
        </div>
    )
}

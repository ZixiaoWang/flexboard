import { h } from "preact";
import { HeaderComponent } from "../components";
import { RoutePage } from "../interfaces";

export const SearchPage = (props: RoutePage) => {

    return (
        <div className="page">
            <HeaderComponent>
                Search
            </HeaderComponent>
        </div>
    )
}
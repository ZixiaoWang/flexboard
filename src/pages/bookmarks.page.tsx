
import { h } from "preact";
import { HeaderComponent } from "../components";
import { RoutePage } from "../interfaces";

export const BookmarksPage = (props: RoutePage) => {

    return (
        <div className="page">
            <HeaderComponent>
                Favorites
            </HeaderComponent>
        </div>
    )
}
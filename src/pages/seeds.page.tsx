import { h } from "preact";
import { HeaderComponent, CardComponent, LogoComponent } from "../components";
import { RoutePage } from "../interfaces";

const news = new Array(50).fill(0);

export const SeedsPage = (props: RoutePage) => {

    return (
        <div className="cards">
            {news.map(() => <CardComponent />)}
        </div>
    )
}
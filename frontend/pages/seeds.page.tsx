import { h } from "preact";
import { HeaderComponent, CardComponent, LogoComponent } from "../components";
import { RoutePage } from "../interfaces";

const news = new Array(50).fill(0);

export const SeedsPage = (props: RoutePage) => {

    return (
        <div className="cards">
            {   news
                .map((_: number, index: number) => {
                    if (index === 0) return <CardComponent />
                    return <CardComponent size="small" />
                })
            }
        </div>
    )
}
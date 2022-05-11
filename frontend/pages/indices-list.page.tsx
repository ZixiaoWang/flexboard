import { h } from "preact";
import { route } from "preact-router";
import { RoutePage } from "../interfaces";

export const IndicesListPage = (props: RoutePage) => {

    const goto = (destination: string) => {
        route(destination);
    }

    return (
        <div className="indices-list">
            <div className="indices-list-item" onClick={() => goto("/indices/flexport-indicator")}>
                <ion-icon name="bar-chart"></ion-icon>
                <span>&nbsp;&nbsp;</span>
                <span>Flexport Indicator</span>
                <span className="indices-list-item-icon">
                    <ion-icon name="arrow-forward-circle"></ion-icon>
                </span>
            </div>
            <div className="indices-list-item" onClick={() => goto("/indices/shanghai-exchange")}>
                <ion-icon name="server"></ion-icon>
                <span>&nbsp;&nbsp;</span>
                <span>Shanghai Shipping Exchange</span>
                <span className="indices-list-item-icon">
                    <ion-icon name="arrow-forward-circle"></ion-icon>
                </span>
            </div>
        </div>
    )
}
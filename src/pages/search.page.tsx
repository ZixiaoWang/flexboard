import { h } from "preact";
import { RoutePage } from "../interfaces";

export const SearchPage = (props: RoutePage) => {

    return (
        <div className="search">
            <div className="search-row">
                <div className="search-input">
                    <input placeholder="Try Flexport..." type="text" />
                    <ion-icon name="search"></ion-icon>
                </div>
            </div>
            <br /><br />
            <div className="search-row">
                <div className="search-title">
                    Featured Topics
                </div>
                <div className="search-item">
                    Flexport
                </div>
                <div className="search-item">
                    Shipments
                </div>
                <div className="search-item">
                    Air shipment
                </div>
            </div>
            <div className="search-row">
                <div className="search-title">
                    Histories
                </div>
                <div className="search-item">
                    abc
                </div>
                <div className="search-item">
                    bbc
                </div>
            </div>
        </div>
    )
}
import { Fragment, h } from "preact";
import { RoutePage } from "../interfaces";

export const SearchPage = (props: RoutePage) => {

    const renderSearchResults = () => {

    }

    const renderSearchSuggestions = () => {

    }

    const renderHistories = () => {
        return (
            <Fragment>
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
                    <div className="search-title is-level">
                        <div className="is-level-left">Histoires</div>
                        <div className="is-level-right is-flex is-vertical-center">
                            <span>Delete all</span>
                            <span>&nbsp;</span>
                            <ion-icon name="trash-sharp"></ion-icon>
                        </div>
                    </div>
                    <div className="search-item">
                        abc
                    </div>
                    <div className="search-item">
                        bbc
                    </div>
                </div>
            </Fragment>
        )
    }

    return (
        <div className="search">
            <div className="search-row">
                <div className="search-input">
                    <input placeholder="Try Ryan Peterson" type="text" />
                    <ion-icon name="search"></ion-icon>
                </div>
            </div>
            {renderHistories()}
        </div>
    )
}
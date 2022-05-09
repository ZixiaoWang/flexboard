import { Fragment, h } from "preact";
import { route } from "preact-router";
import { useState } from "preact/hooks";
import { useSearchStore } from "../helpers";
import { RoutePage } from "../interfaces";

enum SearchPageEnum {
    HISTORIES,
    SUGGESTIONS,
    RESULTS,
    LOADING,
}

export const SearchPage = (props: RoutePage) => {
    const [status, setStatus] = useState(SearchPageEnum.HISTORIES);
    const [keywords, setKeywords] = useState("");
    const [results, setResults] = useState([1,2,3,4,5]);
    const { searchStore } = useSearchStore();

    const deleteHistories = () => {
        if (window.confirm("Do you want to delete all searching histories?")) {
            searchStore.deleteAllHistory();
        }
    }

    const search = (event: Event) => {
        event.preventDefault();
        setStatus(SearchPageEnum.LOADING);
        setTimeout(() => setStatus(SearchPageEnum.RESULTS), 2000);
        searchStore.addHistory(keywords);
    }

    const renderLoading = () => {
        return (
            <div className="search-results">
                loading...
            </div>
        )
    }

    const renderSearchResults = () => {
        return (
            <div className="search-results">
                {results.map((result: number, index: number) => {
                    return (
                        <div key={index}
                            className="search-result"
                            onClick={() => route("/seeds/" + result.toString())}>
                            <div className="search-result-url">https://placekittn.com/900/460</div>
                            <div className="search-result-title">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            </div>
                            <div className="search-result-description">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Mollitia, deleniti vero officia <b>doloremque</b> maiores odit
                                at incidunt, libero dignissimos fuga <b>facere</b>
                                voluptate veniam totam omnis quos. Autem quaerat quas
                                temporibus hic assumenda?
                            </div>
                        </div>
                    )
                })}
            </div>
        )
    }

    const renderSearchSuggestions = () => {
        return (
            <div className="search-suggestions">
                <div className="search-suggestion">Ocean shipment</div>
                <div className="search-suggestion">Air shipment</div>
                <div className="search-suggestion">Trucking</div>
            </div>
        )
    }

    const renderHistories = () => {
        return (
            <Fragment>
                <div className="has-margin-top-6"></div>
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
                        <div className="is-level-right is-flex is-vertical-center"
                            onClick={deleteHistories}
                            onKeyDown={deleteHistories}>
                            <span>Delete all</span>
                            <span>&nbsp;</span>
                            <ion-icon name="trash-sharp"></ion-icon>
                        </div>
                    </div>
                    {
                        searchStore
                            .getHistories()
                            .map(history => (
                                <div className="search-item">
                                    {history}
                                </div>
                            ))
                    }
                </div>
            </Fragment>
        )
    }

    return (
        <div className="search">
            <div className="search-row">
                <form onSubmit={search}>
                    <div className="search-input">
                        <input type="text"
                            id="searchinput"
                            placeholder="Try Ryan Petersen"
                            value={keywords}
                            onChange={(event) => setKeywords(event?.target?.value)}
                            onFocus={() => setStatus(SearchPageEnum.SUGGESTIONS)}
                            onBlur={() => setStatus(SearchPageEnum.HISTORIES)} />
                        <ion-icon name="search" onClick={search}></ion-icon>
                    </div>
                </form>
            </div>
            {status === SearchPageEnum.LOADING && renderLoading()}
            {status === SearchPageEnum.HISTORIES && renderHistories()}
            {status === SearchPageEnum.SUGGESTIONS && renderSearchSuggestions()}
            {status === SearchPageEnum.RESULTS && renderSearchResults()}
        </div>
    )
}
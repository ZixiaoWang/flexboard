import { Fragment, h } from "preact";
import { useState } from "preact/hooks";
import { RoutePage } from "../interfaces";

enum SearchPageEnum {
    HISTORIES,
    SUGGESTIONS,
    RESULTS
}

export const SearchPage = (props: RoutePage) => {
    const [status, setStatus] = useState(SearchPageEnum.HISTORIES);
    const [keywords, setKeywords] = useState("");
    const [loading, setLoading] = useState(false);
    const [results, setResults] = useState([]);

    const renderSearchResults = () => {
        return (
            <div className="search-results">
                <div className="search-result">
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

                <div className="search-result">
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
                <div className="search-result">
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
                <div className="has-margin-top-3"></div>
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
                    <input type="text"
                        placeholder="Try Ryan Peterson"
                        value={keywords}
                        onChange={(event) => setKeywords(event?.target?.value)}
                        onFocus={() => setStatus(SearchPageEnum.SUGGESTIONS)}
                        onBlur={() => setStatus(SearchPageEnum.HISTORIES)}/>
                    <ion-icon name="search"></ion-icon>
                </div>
            </div>
            {status === SearchPageEnum.HISTORIES && renderHistories()}
            {status === SearchPageEnum.SUGGESTIONS && renderSearchSuggestions()}
            {status === SearchPageEnum.RESULTS && renderSearchResults()}
        </div>
    )
}
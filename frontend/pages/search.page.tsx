import { Fragment, h } from "preact";
import { route } from "preact-router";
import { useState } from "preact/hooks";
import { Loader } from "../components";
import { useSearchStore, useSeedsStore } from "../helpers";
import { RoutePage, SeedArticleItem } from "../interfaces";

import RyanPetersen from "../icons/ryan_petersen.png";

enum SearchPageEnum {
    HISTORIES,
    RESULTS,
    LOADING,
}

const FEATURED_TOPICS = [
    "ukrainian",
    "covid",
    "volume",
    "trucking"
]

export const SearchPage = (props: RoutePage) => {
    const [status, setStatus] = useState(SearchPageEnum.HISTORIES);
    const [keywords, setKeywords] = useState("");
    const [results, setResults] = useState([]);
    const { searchStore } = useSearchStore();
    const { seedsStore } = useSeedsStore();

    const deleteHistories = () => {
        if (window.confirm("Do you want to delete all searching history?")) {
            searchStore.deleteAllHistory();
        }
    }

    const search = (event: Event) => {
        event.preventDefault();
        
        if (!keywords) {
            return null;
        }
        
        if (keywords.toLocaleLowerCase() === "ryan petersen" || keywords.toLocaleLowerCase() === "ryan peterson") {
            const ryan = document.getElementById("ryanpetersen");
            if (ryan) {
                ryan.classList.add("show");
                setTimeout(() => {
                    ryan.classList.remove("show");
                    setStatus(SearchPageEnum.LOADING);
                    setTimeout(() => {
                        const resultArr = seedsStore.findByKeywords(keywords);
                        setResults(resultArr);
                        setStatus(SearchPageEnum.RESULTS);
                    }, 1000 + Math.floor(Math.random() * 1000));
                    searchStore.addHistory(keywords);
                }, 3000);
            }
        } else {
            setStatus(SearchPageEnum.LOADING);
            setTimeout(() => {
                const resultArr = seedsStore.findByKeywords(keywords);
                setResults(resultArr);
                setStatus(SearchPageEnum.RESULTS);
            }, 1000 + Math.floor(Math.random() * 1000));
            searchStore.addHistory(keywords);
        }
    }

    const directSearch = (keyword: string) => {
        setKeywords(keyword);
        setStatus(SearchPageEnum.LOADING);
        setTimeout(() => {
            const resultArr = seedsStore.findByKeywords(keyword);
            setResults(resultArr);
            setStatus(SearchPageEnum.RESULTS);
        }, 1000 + Math.floor(Math.random() * 1000));
        searchStore.addHistory(keyword);
    }

    const renderLoading = () => {
        return <Loader>Searching...</Loader>
    }

    const renderSearchResults = () => {
        if (results.length === 0) {
            return (
                <div className="search-results">
                    <div className="is-text-center white is-text-m">
                        Didn't find any results
                    </div>
                </div>
            )
        }
        return (
            <div className="search-results">
                {results.map((result: SeedArticleItem, index: number) => {
                    return (
                        <div key={index}
                            className="search-result"
                            onClick={() => route("/seeds/" + window.btoa(result.detailurl))}>
                            <div className="search-result-url">
                                { result.url }
                            </div>
                            <div className="search-result-title">
                                { result.title }
                            </div>
                        </div>
                    )
                })}
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
                    {
                        FEATURED_TOPICS.map((topic: string) => (
                            <div className="search-item" onClick={() => directSearch(topic)}>
                                {topic}
                            </div>
                        ))
                    }
                </div>
                <div className="search-row">
                    <div className="search-title is-level">
                        <div className="is-level-left">History</div>
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
                                <div className="search-item" onClick={() => directSearch(history)}>
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
                            onChange={event => setKeywords(event.target.value)}/>
                        <ion-icon name="search" onClick={search}></ion-icon>
                    </div>
                </form>
            </div>
            {status === SearchPageEnum.LOADING && renderLoading()}
            {status === SearchPageEnum.HISTORIES && renderHistories()}
            {status === SearchPageEnum.RESULTS && renderSearchResults()}
            <img id="ryanpetersen" src={RyanPetersen} alt="Ryan Petersen" className="ryan-petersen" />
        </div>
    )
}
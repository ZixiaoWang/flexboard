import { h } from "preact";
import { RoutePage, SeedArticleItem } from "../interfaces";
import { useBookmarkStore, useSeedsStore } from "../helpers";
import { route } from "preact-router";

export const BookmarksPage = (props: RoutePage) => {
    const { seedsStore, getSeeds } = useSeedsStore();
    const { bookmarkStore } = useBookmarkStore();

    const back = () => {
        history.back();
    }

    const goto = (seed: SeedArticleItem): void => {
        route("/seeds/" + window.btoa(seed.detailurl));
    }

    const bookmarks =  bookmarkStore.getBookmarks() || [];

    return (
        <div className="bookmarks">
            <div className="article-actions is-level">
                <div className="is-level-left" onClick={back}>
                    <ion-icon name="chevron-back"></ion-icon>
                </div>
            </div>
            <div>
                <div className="has-padding-4 has-margin-bottom-2">
                    <span className="white is-text-bold is-text-l">Bookmarks</span>
                </div>
            {
                bookmarks.length === 0 ?
                <div className="grey40 is-text-m is-text-center">
                    No bookmarks
                </div> :
                 bookmarks
                    .map((bookmark: string) => seedsStore.getSeedByURL(bookmark))
                    .map((seed: SeedArticleItem, index: number) => {
                        return (
                            <div className="bookmark" 
                                key={index}
                                onClick={() => goto(seed)}
                                onkeydown={() => goto(seed)}>
                                <div className="bookmark-img" style={{
                                    backgroundImage: `url(${ seed.thumbnail })`
                                }}>&nbsp;</div>
                                <div className="bookmark-text">
                                    <div className="is-text-m is-text-bold">
                                        { seed.title }
                                    </div>
                                    <br />
                                    <div className="is-text-s grey40">
                                        { seed.url.substring(0, 28) }...
                                    </div>
                                </div>
                            </div>
                        )
                    })
            }
            </div>
        </div>
    )
}
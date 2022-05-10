import { HookClass } from "./hookClass";
import { useState, useEffect } from "preact/hooks";

class BookmarkStore extends HookClass {
    private bookmarks: Set<string> = new Set();
    private key: string = "FLEXBOARD_BOOKMARKS";

    init() {
        const rawbookmarks: string = localStorage.getItem(this.key);
        if (rawbookmarks) {
            this.bookmarks = new Set(rawbookmarks.split(";")
                .map((base64bookmark: string) => atob(base64bookmark))
            );
            this.invokeCallbacks();
        }
    }

    hasBookmark(bookmark: string): boolean {
        return this.bookmarks.has(bookmark);
    }

    toggleBookmark(bookmark: string) {
        if (this.bookmarks.has(bookmark)) {
            this.bookmarks.delete(bookmark)
        } else {
            this.bookmarks.add(bookmark)
        }

        this.updateBookmarks();
    }

    getBookmarks(): string[] {
        return Array.from(this.bookmarks);
    }

    private updateBookmarks(): void {
        const bookmarksString: string = Array
            .from(this.bookmarks)
            .map((bookmark: string) => window.btoa(bookmark))
            .join(";");
        localStorage.setItem(this.key, bookmarksString);
        this.invokeCallbacks();
    }
}

const bookmarkStore: BookmarkStore = new BookmarkStore();

export const useBookmarkStore = () => {
    const [nounce, setNounce] = useState(Math.random());

    useEffect(() => {
        bookmarkStore.setCallback(setNounce);
        bookmarkStore.init();
    }, []);

    return {
        bookmarkStore,
        nounce, 
        setNounce
    }
}
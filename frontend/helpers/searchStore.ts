import { StateUpdater, useEffect, useState } from "preact/hooks";
import { HookClass } from "./hookClass";

class SearchStore extends HookClass {
    private key: string = "FLEXBOARD_SEARCH_HISTORIES";

    public historySet: Set<string> = new Set();

    constructor() {
        super();
        this.historySet = new Set(this.readHistories());
    }

    getHistories(): string[] {
        return Array.from(this.historySet);
    }

    addHistory(history: string): void {
        this.historySet.add(history);
        this.updateCache();
    }

    deleteHistory(history: string): void {
        this.historySet.delete(history);
        this.updateCache();
    }

    deleteAllHistory(): void {
        this.historySet = new Set();
        this.updateCache();
    }

    private readHistories(): string[] {
        const historyString: string = localStorage.getItem(this.key) || "";
        if (!historyString) {
            return []
        }
        return historyString
            .split(",")
            .map(str => str.trim())
            .map(str => atob(str));
    }

    private updateCache(): void {
        const historyString: string = Array
            .from(this.historySet)
            .map((history: string) => btoa(history))
            .join(",");
        localStorage.setItem(this.key, historyString);
        this.invokeCallbacks();
    }
}

const searchStore: SearchStore = new SearchStore();

export const useSearchStore = () => {
    const [nounce, setNounce] = useState(Math.random());

    useEffect(() => {
        searchStore.setCallback(setNounce);
    }, []);

    return {
        searchStore,
        nounce,
        setNounce
    }
}
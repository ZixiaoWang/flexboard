import axios, { AxiosResponse } from "axios";
import { useEffect, useState } from "preact/hooks";
import { SeedArticleItem, SeedResponse } from "../interfaces";
import { HookClass } from "./hookClass";

class SeedsStore extends HookClass  {
    seeds: SeedArticleItem[] = [];
    seedsToDisplay: SeedArticleItem[] = [];

    private lastTimeGetSeeds: number = -1;

    constructor() {
        super();
        (window as any).seedsStore = this;
    }

    init() {
        if (this.lastTimeGetSeeds === -1 || Date.now() - this.lastTimeGetSeeds > 1000 * 60 * 10) {
            return axios
                .get("/data/manifest.json")
                .then((response: AxiosResponse) => {
                    const seeds: SeedResponse = response.data;
                    this.seeds = seeds.articles;
                    this.seedsToDisplay = this.seeds.slice(0, 24);
                    this.invokeCallbacks();
                })
        } else {
            return this.seeds;
        }
    }

    findByKeywords(keywords: string): Array<SeedArticleItem> {
        if (this.seeds.length === 0) {
            return [];
        }

        const keywordArr: string[] = keywords.trim().split(" ").filter(word => Boolean(word));
        const results = [];

        keywordArr.forEach((keyword: string) => {
            this.seeds.forEach((seed: SeedArticleItem) => {
                if (seed.title.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) !== -1) {
                    results.push(seed);
                }
            })
        });

        return results;
    }

    getSeedByURL(url: string): SeedArticleItem | null {
        if (this.seeds.length === 0) {
            return null;
        }

        return this.seeds.find((seed: SeedArticleItem) => {
            return seed.url === url;
        });
    }

    loadMoreSeeds(): void {
        this.seedsToDisplay = this.seeds.slice(0, this.seedsToDisplay.length + 10);
        this.invokeCallbacks();
    }
}

const seedsStore: SeedsStore = new SeedsStore();

export const useSeedsStore = () => {
    const [nounce, setNounce] = useState(Math.random());
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        seedsStore.setCallback(setNounce);
    }, []);

    const getSeeds = async () => {
        setLoading(true);
        await seedsStore.init();
        setLoading(false);
    }

    return {
        seedsStore,
        nounce,
        loading,
        setNounce,
        setLoading,
        getSeeds,
    }
}
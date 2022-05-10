import axios, { AxiosResponse } from "axios";
import { useEffect, useState } from "preact/hooks";
import { SeedArticleItem, SeedResponse } from "../interfaces";
import { HookClass } from "./hookClass";

class SeedsStore extends HookClass  {
    seeds: SeedArticleItem[] = [];

    init() {
        return axios
            .get("/data/manifest.json")
            .then((response: AxiosResponse) => {
                const seeds: SeedResponse = response.data;
                this.seeds = seeds.articles;
                this.invokeCallbacks();
            })
    }

    findByKeywords(keywords: string): Array<SeedArticleItem> {
        return [];
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
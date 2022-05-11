import { Fragment, h } from "preact";
import { useEffect, useState } from "preact/hooks";
import { CardComponent, Loader } from "../components";
import { useSeedsStore } from "../helpers";
import { RoutePage, SeedArticleItem } from "../interfaces";

interface SectionProps {
    label: string;
    hasSeparator?: boolean;
    children?: any;
}

const Section = (props: SectionProps) => (
    <Fragment>
        {
            props.label &&
            <div className="has-padding-1">
                <h3 className="red30">{props.label}</h3>
            </div>
        }
        {props.children}
        {
            props.hasSeparator && <hr />
        }
    </Fragment>
)

export const SeedsPage = (props: RoutePage) => {
    const {seedsStore, loading, getSeeds} = useSeedsStore();
    const [source, setSource] = useState("ALL");
    const seeds = seedsStore.seeds;

    useEffect(() => {
        getSeeds();
    }, [])

    if (loading) {
        return <Loader />
    }

    return (
        <Fragment>
            <div className="cards">
                <div className="seed-boxes">
                    <div className="seed-box">
                        <div className="is-text-s white">
                            Current FBX
                        </div>
                        <div className="is-text-xxl green30">
                            $8,710
                        </div>
                    </div>
                    <div className="seed-box">
                        <div className="is-text-s white">
                            Volatility
                        </div>
                        <div className="is-text-xxl green30">
                            0.00%
                        </div>
                    </div>
                </div>
                <Section label="Top News" hasSeparator>
                    <div className="seed-top">
                        {
                            seeds
                                .slice(0, 4)
                                .map((seed: SeedArticleItem) => {
                                    return <CardComponent size="large" seed={seed} />
                                })
                        }
                    </div>
                </Section>
                <div className="widges">
                    <div className={source === "ALL" ? "widge is-selected" : "widge"} onClick={() => setSource("ALL")}>All Sources</div>
                    <div className={source === "WSJ" ? "widge is-selected" : "widge"} onClick={() => setSource("WSJ")}>WSJ</div>
                    <div className={source === "FRIEIGHT_WAVES" ? "widge is-selected" : "widge"} onClick={() => setSource("FRIEIGHT_WAVES")}>Freight Waves</div>
                </div>
                <Section label="Seeds">
                    {
                        seeds
                            .slice(4)
                            .filter((seed) => {
                                if (source === "ALL") {
                                    return true;
                                } else {
                                    if (source === "WSJ") {
                                        return seed.source.indexOf("WSJ") === 0;
                                    } else {
                                        return seed.source === "Freight Waves";
                                    }
                                }
                            })
                            .map((seed: SeedArticleItem) => <CardComponent size="small" seed={seed} />)
                    }
                </Section>
            </div>
        </Fragment>
    )
}
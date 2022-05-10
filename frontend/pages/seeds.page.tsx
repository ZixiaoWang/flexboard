import { Fragment, h } from "preact";
import { useEffect } from "preact/hooks";
import { CardComponent } from "../components";
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
    const seeds = seedsStore.seeds;

    useEffect(() => {
        getSeeds();
    }, [])

    if (loading) {
        return <div>Loading</div>
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
                            $5,430
                        </div>
                    </div>
                    <div className="seed-box">
                        <div className="is-text-s white">
                            Volatility
                        </div>
                        <div className="is-text-xxl red30">
                            1.23%
                        </div>
                    </div>
                </div>
                <Section label="Top News" hasSeparator>
                    <CardComponent size="large" seed={seeds[0]} />
                </Section>
                <div className="widges">
                    <div className="widge is-selected">All Categories</div>
                    <div className="widge">Ocean</div>
                    <div className="widge">Air</div>
                    <div className="widge">Trucking</div>
                    <div className="widge">COVID</div>
                    <div className="widge">Tenology</div>
                    <div className="widge">Commercial</div>
                </div>
                <Section label="Seeds">
                    {
                        seeds
                            .slice(1)
                            .map((seed: SeedArticleItem) => <CardComponent size="small" seed={seed} />)
                    }
                </Section>
            </div>
        </Fragment>
    )
}
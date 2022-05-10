import axios, { AxiosResponse } from "axios";
import { Fragment, h } from "preact";
import { useState, useEffect } from "preact/hooks";
import { CardComponent } from "../components";
import { RoutePage, SeedArticleItem, SeedResponse } from "../interfaces";

const news = new Array(10).fill(0);

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
    const [loading, setLoading] = useState(true);
    const [seeds, setSeeds] = useState([]);

    useEffect(() => {
        axios
            .get("/data/manifest.json")
            .then((response: AxiosResponse) => {
                const seeds: SeedResponse = response.data;
                const articles = seeds.articles;
                setLoading(false);
                setSeeds(articles);
            })
    }, []);

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
                    {seeds.map((seed: SeedArticleItem) => <CardComponent size="small" seed={seed} />)}
                </Section>
            </div>
        </Fragment>
    )
}
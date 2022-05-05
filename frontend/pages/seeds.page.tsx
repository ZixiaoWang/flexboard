import { Fragment, h } from "preact";
import { CardComponent } from "../components";
import { RoutePage } from "../interfaces";

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
                <h3 className="red50">{props.label}</h3>
            </div>
        }
        {props.children}
        {
            props.hasSeparator && <hr />
        }
    </Fragment>
)

export const SeedsPage = (props: RoutePage) => {
    return (
        <Fragment>
            <div className="cards">
                <div className="seed-boxes">
                    <div className="seed-box">
                        <div className="is-text-s grey40">
                            Current FBX
                        </div>
                        <div className="is-text-xxl green60">
                            $5,430
                        </div>
                    </div>
                    <div className="seed-box">
                        <div className="is-text-s grey40">
                            Volatility
                        </div>
                        <div className="is-text-xxl grey50">
                            1.23%
                        </div>
                    </div>
                </div>
                <Section label="Top News" hasSeparator>
                    <CardComponent />
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
                    {news.map(() => <CardComponent size="small" />)}
                </Section>
            </div>
        </Fragment>
    )
}
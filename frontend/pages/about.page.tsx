import { h } from "preact";
import { RoutePage } from "../interfaces";

export const AboutPage = (props: RoutePage) => {
    return (
        <div className="about">
            <div className="article-actions is-level">
                <div className="is-level-left" onClick={() => history.back()}>
                    <ion-icon name="chevron-back"></ion-icon>
                </div>
            </div>
            <div className="about-title">
                About Flexboard
            </div>
            <div className="about-content grey40">
                <p>
                    Flexboard is the premier supply chain and logistics news app.
                    Consolidating top industry news from multiple channels and sources
                    around the world. Flexboard allows a user to customize their own news
                    browsing experience. With extensive personalization through bookmarking,
                    news grouping by topics, and top notch user interface and user experience,
                    Flexboard will deliver the best browsing experience for industry
                    amateurs and professionals alike!
                </p>
                <p>
                    The Flexboard team is comprised of members originating from a wide range of
                    teams across Tech and Business. Having team members from engineering, product,
                    client solutions and ocean teams provides a great mix of technical
                    prowess and business knowledge. Now introducing our team members!
                </p>
                <hr />
            </div>
        </div>
    )
}
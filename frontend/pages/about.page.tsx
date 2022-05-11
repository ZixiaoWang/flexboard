/// <reference path="../custom.d.ts" />

import { h } from "preact";
import { RoutePage } from "../interfaces";

import ALL_MEMBERS from "../icons/all-member.jpg";

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
                <div className="about-bubble left one">
                    <blockquote>
                        Catching up with mass news in such a fast-changing world is not that easy, Flexboard help me and my team, my clients always catch the hottest news from the industry. Easy and effective.
                    </blockquote>
                    <b>Joyee</b>
                </div>
                <div className="about-bubble right two">
                    <blockquote>
                        The past two years have shown that staying up to date with the latest news in the supply chain industry is crucial for us and our customers. Flexboard does just that and more by surfacing the top news in the industry everyday, allowing personalization and easy access to industry specific indices as well!
                    </blockquote>
                    <b>Jonathan</b>
                </div>
                <div className="about-bubble left three">
                    <blockquote>
                    Never get bored with Flex Board! It’s the best ever app for anyone who works in global trade. 
                    </blockquote>
                    <b>Kelly</b>
                </div>
                <div className="about-bubble right four">
                    <blockquote>
                        It's fun 🤪
                    </blockquote>
                    <b>Jacky</b>
                </div>
                <hr />

                <img className="about-img" src={ALL_MEMBERS} alt="" />
            </div>
        </div>
    )
}
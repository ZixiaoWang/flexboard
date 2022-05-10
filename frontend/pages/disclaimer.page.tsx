import { h } from "preact";
import { RoutePage } from "../interfaces";

export const DisclaimerPage = (props: RoutePage) => {
    return (
        <div className="article">
            <div className="article-actions is-level">
                <div className="is-level-left" onClick={() => history.back()}>
                    <ion-icon name="chevron-back"></ion-icon>
                </div>
            </div>
            <h2>Disclaimer</h2>
            <div className="grey40">
                <p>
                    <b>Flexboard</b> is a Flexport 2022 Hackathon project. 
                    The usages of colors and certain styles come from the 
                    Flexport <b>Latitude</b> design system. The contents or 
                    statistics are not associated with any Flexport businesses.
                </p>
                <p>
                    The media and news contents are extracted from external 
                    news sources. The content in this site does not represent 
                    the views of Flexport.
                </p>
                <hr />
            </div>
            <h2>声明</h2>
            <div className="grey40">
                <p>
                    <b>Flexboard</b> 是飞协博2022黑客马拉松项目之一。项目中使用的颜色和特定的设计模式均来自飞协博<b>Latitude</b>设计系统。
                    其中的内容和数据与飞协博业务范围无关。
                </p>
                <p>
                    项目中数据和新闻内容均来自与其他媒体网站，本项目中内容均不代表飞协博立场。
                </p>
            </div>
        </div>
    )
}
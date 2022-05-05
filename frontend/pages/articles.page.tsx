import { h } from "preact";
import { RoutePage } from "../interfaces";

import WSJIcon from "../icons/wsj.svg";

export const ArticlePage = (props: any) => {

    const back = () => {
        history.back();
    }

    return (
        <div className="article">
            <div className="article-actions is-level">
                <div className="is-level-left" onClick={back}>
                    <ion-icon name="chevron-back"></ion-icon>
                </div>
                <div className="is-level-right is-flex is-vertical-center">
                    <ion-icon name="share-outline"></ion-icon>
                    <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
                    <ion-icon name="bookmark-outline"></ion-icon>
                </div>
            </div>
            <div className="article-reference">
                <img src={WSJIcon} alt="WSJ" />
            </div>
            <div className="article-thumbnail">
                <img src="http://placekitten.com/640/360" alt="cat" />
            </div>
            <div className="article-title">
                Lorem ipsum dolor sit amet consectetur adipisicing.
            </div>
            <div className="article-label">
                <div>Author: Davy Jones</div>
                <div>Published at: 28 Feb, 2022</div>
            </div>
            <hr />
            <div className="article-content">
                <p className="first-paragraph">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia molestias consequatur, cupiditate repudiandae modi cumque illum maiores harum? Repellat molestias nobis accusamus, quos harum perspiciatis cupiditate minus animi atque exercitationem! Ullam distinctio quas nobis.
                </p>
                <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam vero quam veritatis consectetur numquam quia ex. Aspernatur rem dolore rerum facilis sequi ipsum fugiat autem ea quasi quaerat beatae, nobis blanditiis impedit dicta aliquid voluptas totam sed dolorum at ullam. Incidunt, cumque! At, ad explicabo?
                </p>
                <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam maxime reprehenderit eius enim neque?
                </p>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque mollitia error, iure doloribus ipsam, voluptas, corrupti iusto accusantium cupiditate perferendis tempore laborum libero magni dolorum. Nihil, ipsum rem id nemo molestias dolore, ducimus recusandae perferendis quam temporibus voluptatem! Esse accusantium cupiditate id ad placeat modi dolore culpa non tempore saepe sequi molestiae, maiores enim sint alias facilis expedita possimus earum eaque velit praesentium est. Porro corrupti similique, fugit blanditiis tenetur aliquam veniam maxime molestiae iste, beatae, distinctio fuga!
                </p>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit inventore ab nesciunt quisquam enim vel sunt. Debitis quaerat odio placeat voluptas magni. Praesentium.
                </p>
            </div>
            <hr />
        </div>
    )
}
import { h } from "preact";
import { RoutePage } from "../interfaces";

export const AboutPage = (props: RoutePage) => {
    return (
        <div className="article">
            <div className="article-actions is-level">
                <div className="is-level-left" onClick={() => history.back()}>
                    <ion-icon name="chevron-back"></ion-icon>
                </div>
            </div>
            <h3>About Flexboard</h3>
            <div className="grey40">
                <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus, ratione dolorum facere quo sint sit dignissimos quis nihil vitae provident adipisci ullam in qui explicabo distinctio accusantium iure unde tempore perferendis excepturi nulla! Rem obcaecati est nostrum repudiandae deserunt unde cumque quas hic accusantium aliquam corrupti fugiat numquam nemo dignissimos minus eos commodi, corporis sequi rerum laudantium? Provident modi optio, asperiores blanditiis molestiae fugiat nostrum est dolores laboriosam sunt eum quo temporibus omnis vero velit delectus cum dolore mollitia facere.
                </p>
                <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora hic eaque, laudantium voluptas officia asperiores dolor debitis laboriosam aspernatur amet autem inventore quidem est optio possimus animi, quos nisi non sequi rerum molestiae aliquam expedita ullam illo. Alias quibusdam dolor nobis, magnam iste vel repellendus!
                </p>
                <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero architecto consequuntur, possimus harum, iure nostrum pariatur asperiores voluptate tempora dolorem quam ipsum adipisci.
                </p>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius fugiat natus dicta eum officiis non sint dolor maiores, inventore aliquid excepturi consequuntur cum veritatis, assumenda porro numquam consectetur nemo doloremque deserunt quibusdam reprehenderit necessitatibus itaque saepe quae. Qui a debitis provident amet eius repudiandae atque laudantium harum natus non. Rerum, facilis aperiam. Facere harum similique, maxime in minus corrupti pariatur corporis est culpa saepe, beatae accusantium, praesentium tempora? Sequi temporibus tempore vel labore officiis adipisci est cumque, nisi alias quam laboriosam ipsum neque perspiciatis possimus dolore, non voluptas, ab voluptates! Expedita iure ea eos, harum magnam libero vel odio enim.
                </p>
            </div>
        </div>
    )
}
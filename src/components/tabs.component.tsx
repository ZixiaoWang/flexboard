import { h } from "preact";
import { route } from "preact-router";
import { Link } from "preact-router/match";

export const TabsComponent = () => {
    const navigateTo = (destination: string) => {
        return () => {
            route(destination);
        }
    }

    return (
        <div className="tabs">
            <Link className="tab"
                activeClassName="is-active" 
                href="/seeds">
                <ion-icon name="newspaper"></ion-icon>
            </Link>
            <Link className="tab"
                activeClassName="is-active" 
                href="/search">
                <ion-icon name="search"></ion-icon>
            </Link>
            <Link className="tab"
                activeClassName="is-active" 
                href="/bookmarks">
                <ion-icon name="star"></ion-icon>
            </Link>
            <Link className="tab"
                activeClassName="is-active" 
                href="/settings">
                <ion-icon name="menu"></ion-icon>
            </Link>
        </div>
    )
}

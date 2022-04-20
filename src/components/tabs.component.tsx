import { h } from "preact";
import { route } from "preact-router";

export const TabsComponent = () => {
    const navigateTo = (destination: string) => {
        return () => {
            route(destination);
        }
    }

    return (
        <div className="tabs">
            <div className="tab" onClick={navigateTo("/seeds")}>
                <ion-icon name="newspaper"></ion-icon>
            </div>
            <div className="tab" onClick={navigateTo("/search")}>
                <ion-icon name="search"></ion-icon>
            </div>
            <div className="tab" onClick={navigateTo("/bookmarks")}>
                <ion-icon name="star"></ion-icon>
            </div>
            <div className="tab" onClick={navigateTo("/settings")}>
                <ion-icon name="menu"></ion-icon>
            </div>
        </div>
    )
}

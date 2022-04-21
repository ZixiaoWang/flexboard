import { h } from "preact";

export const HeaderComponent = (props: any) => {

    return (
        <div className="header">
            <div className="header-logo">
                { props.children }
            </div>
        </div>
    )
}

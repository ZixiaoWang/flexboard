import { h } from "preact";

export interface LogoComponentProps {
    [key: string]: string | number | undefined | null
}

export const LogoComponent = (props: LogoComponentProps) => {

    return (
        <div className="logo" style={{...props}}>
            <span>Flex</span>
            <span>b</span>
            <span>o</span>
            <span>a</span>
            <span>r</span>
            <span>d</span>
            <span className="red40">.</span>
        </div>
    )
}

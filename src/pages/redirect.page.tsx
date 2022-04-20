import { h } from "preact";
import { useEffect } from "preact/hooks";
import {route} from "preact-router";

export interface RedirectProps {
    to: string,
    default?: boolean,
}

export const Redirect = (props: RedirectProps) => {
    
    useEffect(() => {
        route(props.to, true);
    }, []);

    return null;
}
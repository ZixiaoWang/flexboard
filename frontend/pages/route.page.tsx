import { h } from "preact";
import Router from "preact-router";
import { RoutePage } from "../interfaces";

export const Route = (props: RoutePage) => {
    return props.children;
}
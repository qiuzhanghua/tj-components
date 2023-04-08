import styles from "./tj-counter.css?inline";
import {Component} from "solid-js";
import {customElement} from "solid-element";

interface Props {
    name: string;
}
const TjCounter: Component<Props> = (props) => {
    return <>
        <style>
            @unocss-placeholder
            {styles}
        </style>
        <p class="text-red-500" style="color:rgba(59,130,246">TJ Counter by {props.name}</p>
        {/*...*/}
    </>;
}

customElement("tj-counter", { name: "Daniel" }, TjCounter)

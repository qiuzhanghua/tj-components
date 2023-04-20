import styles from "./tj-counter.css?inline";
import {Component, createSignal} from "solid-js";
import {customElement} from "solid-element";
import {Portal} from "solid-js/web";

interface Props {
    name: string;
}

const TjCounter: Component<Props> = (props) => {
    const [count, setCount] = createSignal(0)
    let btn;
    return (
        <Portal useShadow={true}>
            <style>
                @unocss-placeholder
            </style>
            <button
                ref={btn}
                className="bg-blue-400 hover:bg-blue-500 text-sm text-white font-mono font-light py-2 px-4 rounded border-2 border-blue-200 dark:bg-blue-500 dark:hover:bg-blue-600"
                onClick={() => setCount(count => count + 1)}
            >TJ Counter {count()} by {props.name}</button>
        </Portal>
    );
}

customElement("tj-counter", {name: "Daniel"}, TjCounter)

import Aether from "@aether/Aether.js";
import styles from "./Section.module.css";


export default function Section(props, ...children) {
    return new Aether.Component(
        <section class={styles.Section}>
            <h2>{props.title}</h2>
            <p>{props.description}</p>
            {...children}
        </section>
    );
}
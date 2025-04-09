import Aether from "@aether/Aether.js";
import styles from "@styles/Section.module.css";


export default function Section(props, ...children) {
    return new Aether.Component(
        <section class={styles.Section}>
            <h2>{props.title}</h2>
            <p class="color-gray70">{props.description}</p>
            {...children}
        </section>
    );
}
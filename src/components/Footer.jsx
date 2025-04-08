import styles from "@/components/Footer.module.css";
import Aether from "@/core/aether/Aether.js";


export default function Footer(props) {
    return new Aether.Component(
        <footer class={styles.Footer}>
            <p>{props.description}</p>
        </footer>
    );
}
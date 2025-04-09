import styles from "@styles/Footer.module.css";
import Aether from "@aether/Aether.js";


export default function Footer(props) {
    return new Aether.Component(
        <footer class={styles.Footer}>
            <p>{props.description}</p>
        </footer>
    );
}
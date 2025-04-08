import styles from "@/components/Header.module.css";
import Aether from "@/core/aether/Aether.js";


export default function Header(props) {
    return new Aether.Component(
        <header class={styles.header}>
            <h1>{props.title}</h1>
            <p>{props.description}</p>
        </header> 
    );
}
import Aether from "@/core/aether/Aether.js";
import styles from "./NavBar.module.css";


export default function NavBar({ links = [] }) {
    const navLinks = links.length > 0 ? links : [
        { href: "/", text: "Inicio" }
    ];

    return new Aether.Component(
        <nav class={styles.NavBar}>
            <ul>
                {navLinks.map(link => (
                    <li><a href={link.href} data-rl>{link.text}</a></li>
                ))}
            </ul>
        </nav>
    );
}
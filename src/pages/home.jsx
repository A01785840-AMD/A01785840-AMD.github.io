import Aether from "@/core/aether/Aether.js";
import NavCard from "@/components/NavCard.jsx";
import styles from '@styles/home.module.css';


export default function home_page() {
    return new Aether.Component(
        <div class={styles.homeContainer}>
            <div class={styles.heroSection}>
                <h1 class={styles.mainTitle}>HELLO WORLD</h1>
                <p class={styles.subtitle}>Welcome to Angel MD's Web Page for TC2005B</p>
                <div class={styles.heroAccent}></div>
            </div>

            <div class={styles.cardGrid}>
                <NavCard href="/about" title="About Me" description="Learn more about my skills and experience"/>
                <NavCard href="/blog" title="Blog" description="Check out my latest articles and thoughts"/>
                <NavCard href="/projects" title="Projects" description="View my portfolio of recent work"/>
                <NavCard href="/contact" title="Contact" description="Get in touch with me"/>
            </div>
        </div>
    );
}

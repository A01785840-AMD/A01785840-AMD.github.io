import Component from '@/core/component.js';
import NavCard from "@/components/NavCard.jsx";
import styles from './home.module.css';
import { forgeComponent } from "@/core/forgeComponent.js";


export default function home_page() {
    return new Component((
        <div class=${styles.homeContainer}>
            <div class=${styles.heroSection}>
                <h1 class=${styles.mainTitle}>HELLO WORLD</h1>
                <p class=${styles.subtitle}>Welcome to Angel MD's Web Page for TC2005B</p>
                <div class=${styles.heroAccent}></div>
            </div>

            <div class=${styles.cardGrid}>
                ${forgeComponent(NavCard, {
                href: "/about",
                title: "About Me",
                description: "Learn more about my skills and experience"
            })}
                ${forgeComponent(NavCard, {
                href: "/blog",
                title: "Blog",
                description: "Check out my latest articles and thoughts"
            })}
                ${forgeComponent(NavCard, {
                href: "/projects",
                title: "Projects",
                description: "View my portfolio of recent work"
            })}
                ${forgeComponent(NavCard, {
                href: "/contact",
                title: "Contact",
                description: "Get in touch with me"
            })}
            </div>
        </div>
    ));
}

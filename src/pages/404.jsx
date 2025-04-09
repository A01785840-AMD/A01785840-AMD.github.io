import Aether from "@/core/aether/Aether.js";
import styles from "@styles/404.module.css"


export default function not_found_page() {
    return new Aether.Component(
        <div class={styles.errorContainer}>
            <div class={styles.errorCode}>404</div>
            <div class={styles.errorTitle}>Page Not Found</div>
            <div class={styles.errorMessage}>
                Oops! The page you're looking for doesn't seem to exist.
            </div>
            <a href="/" data-rl class={styles.errorButton}>Take Me Home</a>
        </div>
    );
}
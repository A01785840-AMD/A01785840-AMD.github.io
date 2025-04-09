import Aether from "@aether/Aether.js";
import styles from "@styles/NavCard.module.css";


export default function NavCard(props) {
    return new Aether.Component(`
    <a href="${props.href}" data-rl class="${styles.navCard}">
      <h2>${props.title}</h2>
      <p>${props.description}</p>
      <span class="${styles.cardArrow}">→</span>
    </a> 
    `);
}

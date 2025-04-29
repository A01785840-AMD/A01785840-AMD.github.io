import Aether from "@aether/Aether.js";
import styles from "@pages/breackoutgame/breakout.module.css";
import BreakoutGame from "@pages/breackoutgame/game.js";


export default function breakoutGame() {
    const game = new BreakoutGame();

    const initGame = () => {
        game.init();
        game.run();
    };

    const stopGame = () => {
        game.stop();
    }

    return new Aether.Component(
        <div class={styles.container}>
            <main class={styles.gameContainer}>
                <header class={styles.gameInfo}>
                    <div>Blocks Destroyed: <span id="blocks-destroyed">0</span></div>
                    <div>LEVEL <span id="level">01</span></div>
                    <div class={styles.livesContainer}>
                        <div class={styles.lifeIndicator} id="life1"></div>
                        <div class={styles.lifeIndicator} id="life2"></div>
                        <div class={styles.lifeIndicator} id="life3"></div>
                    </div>
                </header>
                <section>
                    <h1 class={styles.message} id="game-message"></h1>
                    <canvas class={styles.canvas} id="gameCanvas"></canvas>
                </section>
                <section class={styles.controls}>
                    <button class={styles.button} id="startButton">Start Game</button>
                    <div class={styles.config}>
                        <label htmlFor="rows">Rows: </label>
                        <input class={styles.input} type="number" id="rows" min="1" max="10" value="7"/>

                        <label htmlFor="columns">Columns: </label>
                        <input class={styles.input} type="number" id="columns" min="1" max="15" value="13"/>
                    </div>
                    <button class={styles.button} id="pauseButton">Pause</button>
                </section>
            </main>
        </div>,
        initGame, stopGame
    );
}
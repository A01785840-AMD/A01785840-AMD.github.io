import Aether, { html } from '@aether/Aether.js';
import Game from "@pages/coinvideogame/game.js"


export default function coinsGame() {
    const game = new Game();

    const afterMount = () => {
        game.init();
        game.run();
    }

    const cleanup = () => {
        game.stop();
    }

    return new Aether.Component(html`
        <style>
            body {
                overflow: hidden;
            }
        </style>
        <canvas id="game"></canvas>
    `, afterMount, cleanup
    );
}
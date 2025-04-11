import Aether, { html } from "@aether/Aether.js";


export default function cssgridpage() {
    return new Aether.Component(html`
        <style>
            :host .header {
                text-align: center;
                padding: 2rem;
                background-color: #282c34;
                color: white;
                border-radius: 5px;
                margin-bottom: 1rem;
            }

            :host .color-gradient {
                background: linear-gradient(90deg, #ff6b6b, #ffbe76, #55efc4);
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
                font-size: 2.5rem;
                margin: 0;
            }

            :host .color-gray70 {
                color: hsl(0, 0%, 70%);
                margin-bottom: 1rem;
            }

            :host .grid-nav {
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
                gap: 1rem;
                padding: 1rem;
                background-color: #282c34;
                border-radius: 5px;
            }

            :host .grid-item {
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                padding: 2rem 1rem;
                text-align: center;
                border-radius: 3px;
                min-height: 150px;
                color: #282c34;
                transition: transform 0.3s ease;
                cursor: pointer;
            }

            :host .grid-item:hover {
                transform: translateY(-5px);
            }

            :host .grid-item h2 {
                margin-top: 0;
                margin-bottom: 0.5rem;
            }

            :host .grid-item p {
                margin: 0;
            }

            :host .grid1 {
                background-color: #ff6b6b;
            }

            :host .grid2 {
                background-color: #ff9e7d;
            }

            :host .grid3 {
                background-color: #ffbe76;
            }

            :host .grid4 {
                background-color: #1dd1a1;
            }

            :host .home {
                background-color: #55efc4;
            }
        </style>

        <div>
            <div class="header">
                <h1 class="color-gradient">CSS GRID EXAMPLES</h1>
                <p class="color-gray70">Explore different CSS Grid layouts and techniques</p>
            </div>

            <div class="grid-nav">
                <a href="/cssgrid/1" class="grid-item grid1">
                    <h2>Grid Example 1</h2>
                    <p>Basic grid with color blocks</p>
                </a>
                <a href="/cssgrid/2" class="grid-item grid2">
                    <h2>Grid Example 2</h2>
                    <p>Layout with header, sidebar and content areas</p>
                </a>
                <a href="/cssgrid/3" class="grid-item grid3">
                    <h2>Grid Example 3</h2>
                    <p>Complex grid with spanning cells</p>
                </a>
                <a href="/cssgrid/4" class="grid-item grid4">
                    <h2>Grid Example 4</h2>
                    <p>Advanced grid layout techniques</p>
                </a>
                <a href="/" class="grid-item home">
                    <h2>Back to Home</h2>
                    <p>Return to the main page</p>
                </a>
            </div>
        </div>
    `);
}
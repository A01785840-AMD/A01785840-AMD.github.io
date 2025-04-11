import Aether, { html } from "@aether/Aether.js";
import NavBar from "@/components/NavBar.jsx";


export default function cssgridpage3() {
    return new Aether.Component(html`
        <style>
            :host {
                display: grid;
                grid-template-columns: 1fr 1fr 1fr 1fr;
                grid-template-rows: 1fr 1.5fr 0.5fr;
                
                grid-gap: 0.75rem;
                padding: 0.75rem;
                
                background-color: #282c34;
                border-radius: 5px;
                height: 85dvh;
            }

            :host div {
                border-radius: 3px;
            }

            :host .top-left {
                grid-column: 1 / 3;
                background-color: #ff9e7d;
            }

            :host .top-right {
                grid-column: 3 / 5;
                background-color: #ff6b6b;
            }

            :host .middle-left {
                grid-column: 1 / 2;
                background-color: #1dd1a1;
            }

            :host .middle-right {
                grid-column: 2 / 5;
                background-color: #55efc4;
            }

            :host .bottom {
                grid-column: 1 / -1;
                background-color: #ffbe76;
            }
        </style>
        <div>
            <div class="top-left"></div>
            <div class="top-right"></div>
            <div class="middle-left"></div>
            <div class="middle-right"></div>
            <div class="bottom"></div>
        </div>
        <div>
            <${NavBar} links="${[
                { href: "/", text: "Home" },
                { href: "/cssgrid", text: "CSS Grid" },
                { href: "/cssgrid/1", text: "1" },
                { href: "/cssgrid/2", text: "2" },
                { href: "/cssgrid/3", text: "3" },
                { href: "/cssgrid/4", text: "4" },
            ]}"/>
        </div>
    `);
}
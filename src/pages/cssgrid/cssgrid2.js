import Aether, { html } from "@aether/Aether.js";
import NavBar from "@/components/NavBar.jsx";


export default function cssgridpage2() {
    return new Aether.Component(html`
        <style>
            :host {
                display: grid;
                grid-template-columns: 1fr 1fr 1fr;
                grid-template-rows: 0.5fr 1fr 1fr;

                grid-gap: 0.75rem;
                padding: 0.75rem;

                background-color: #282c34;
                border-radius: 5px;
                height: 85dvh;
            }

            :host div {
                border-radius: 3px;
            }

            :host .header {
                grid-column: 1 / -1;
                background-color: #ffbe76;
            }

            :host .sidebar {
                grid-row: 2 / 4;
                background-color: #1dd1a1;
            }

            :host .content-top {
                grid-column: 2 / 4;
                background-color: #55efc4;
            }

            :host .content-bottom-left {
                grid-row: 3;
                grid-column: 2 / 3;
                background-color: #ff6b6b;
            }

            :host .content-bottom-right {
                background-color: #ff9e7d;
            }
        </style>
        
        <div>
            <div class="header"></div>
            <div class="sidebar"></div>
            <div class="content-top"></div>
            <div class="content-bottom-left"></div>
            <div class="content-bottom-right"></div>
        </div>
        
        <${NavBar} links="${[
            { href: "/", text: "Home" },
            { href: "/cssgrid", text: "CSS Grid" },
            { href: "/cssgrid/1", text: "1" },
            { href: "/cssgrid/2", text: "2" },
            { href: "/cssgrid/3", text: "3" },
            { href: "/cssgrid/4", text: "4" },
        ]}"/>
    `);
}
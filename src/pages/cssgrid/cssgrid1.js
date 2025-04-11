import Aether, { html } from "@aether/Aether.js";
import NavBar from "@/components/NavBar.jsx";


export default function cssgridpage1() {
    return new Aether.Component(html`
        <style>
            :host {
                display: grid;
                grid-template-columns: 1fr 1fr;
                grid-template-rows: 1fr 1fr;
                grid-gap: 0.75rem;

                padding: 0.75rem;
                height: 85dvh;

                background-color: #282c34;
                border-radius: 5px;
            }

            :host div {
                border-radius: 3px;
            }

            :host .grid-item-1 {
                background-color: #ff6b6b;
            }

            :host .grid-item-2 {
                background-color: #ff9e7d;
            }

            :host .grid-item-3 {
                background-color: #ffbe76;
            }

            :host .grid-item-4 {
                background-color: #1dd1a1;
            }
        </style>

        <div>
            <div class="grid-item-1"></div>
            <div class="grid-item-2"></div>
            <div class="grid-item-3"></div>
            <div class="grid-item-4"></div>
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
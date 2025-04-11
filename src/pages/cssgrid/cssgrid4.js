import Aether, { html } from "@aether/Aether.js";
import NavBar from "@/components/NavBar.jsx";


export default function cssgridpage4() {
    return new Aether.Component(html`
        <style>
            :host {
                display: grid;
                grid-template-columns: 1fr 1fr;
                grid-template-rows: 1fr 2fr;

                grid-gap: 0.75rem;
                padding: 0.75rem;

                background-color: #282c34;
                border-radius: 5px;
                height: 85dvh;
            }

            :host div {
                border-radius: 3px;
            }

            :host .top-left-4 {
                background-color: #ffbe76;
            }

            :host .top-right-4 {
                background-color: #55efc4;
            }

            :host .bottom-left-4 {
                background-color: #ff6b6b;
            }

            :host .bottom-right-4 {
                display: grid;
                grid-template-columns: 1fr 1fr;
                grid-template-rows: 1fr 1fr;

                grid-gap: 0.75rem;
                padding: 0.5rem;

                background-color: #1dd1a1;
            }

            :host .nested-top {
                grid-column: 1 / 3;
                background: #01a787;
            }

            :host .nested-bottom-left {
                grid-column: 1 / 2;
                grid-row: 2;
                background: #1bc1a1;
            }

            :host .nested-bottom-right {
                grid-column: 2 / 3;
                grid-row: 2;
                background-color: #ffbe76;
            }
        </style>
        
        <div>
            <div class="top-left-4"></div>
            <div class="top-right-4"></div>
            <div class="bottom-left-4"></div>
            <div class="bottom-right-4">
                <div class="nested-top"></div>
                <div class="nested-bottom-left"></div>
                <div class="nested-bottom-right"></div>
            </div>
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
import Aether, { html } from "@aether/Aether.js";


export default function Section(props, ...children) {
    return new Aether.Component(html`
        <style>
            :host {
                margin-bottom: 2.5rem;
                background-color: rgba(255, 255, 255, 0.03);
                padding: 1.5rem;
                border-radius: 8px;
                box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            }

            :host h2, :host h3 {
                color: var(--color-primary);
            }

            :host ul, :host ol {
                padding-left: 2rem;
                margin: 1rem 0;
            }

            :host li {
                margin-bottom: 0.5rem;
            }
        </style>
        <section>
            <h2>${props.title}</h2>
            <p class="color-gray70">${props.description}</p>
            ${children}
        </section>
    `);
}
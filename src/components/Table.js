import Aether, { html } from "@aether/Aether.js";


export default function Table({ headers = [], rows = [] }) {
    return new Aether.Component(html`
        <style>
            :host {
                width: 100%;
                border-collapse: collapse;
                margin: 1rem 0;
            }

            :host th, :host td {
                padding: 0.75rem;
                border: 1px solid rgba(255, 255, 255, 0.1);
                text-align: left;
            }

            :host th {
                background-color: rgba(255, 255, 255, 0.05);
            }
        </style>
        <table>
            <thead>
            <tr>
                ${headers.map(header =>
                        `<th>${header}</th>`
                )}
            </tr>
            </thead>
            <tbody>
            ${rows.map(row => (
                    html`<tr>
                ${row.map(cell =>
                            `<td>${cell}</td>`
                    )}
            </tr>`
            ))}
            </tbody>
        </table>
    `);
}

/*
 * By Angel Montemayor Davila, A01785840
 * 7-APR-2025
 */
import Component from "@aether/component.js";
import { forgeComponent } from "@aether/forgeComponent.js";
import render from "@/core/aether/render.js";
import htm from "htm";


const Aether = {
    forgeComponent,
    Component,
    render
};

const html = htm.bind(Aether.forgeComponent);

export { html };
export default Aether;
/*
 * By Angel Montemayor Davila, A01785840
 * 7-APR-2025
 */
import { currentComponents, getNewComponentId } from './lifecycleState.js';


export default class Component {
    constructor(html, afterRender = () => {}, cleanup = () => {}) {
        this.id = getNewComponentId();
        this.html = html;
        this.afterRender = afterRender;
        this.cleanupFunction = cleanup;

        currentComponents.set(this.id, this);
    }
}

export default class Component {
    constructor(html, afterRender = () => {}, cleanupFunction = () => {}) {
        if (typeof html !== 'string') throw new Error('Component html must be a string');

        this.html = html;
        this.afterRender = afterRender;
        this.cleanupFunction = cleanupFunction;
    }
}

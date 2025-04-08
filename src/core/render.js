/*
 * By Angel Montemayor Davila, A01785840
 * 7-APR-2025
 */
import Component from "@/core/component.js";

let currentComponentInstance = null;

export default async function render(componentFn, props = {}, targetId = 'app') {
    if (typeof componentFn !== 'function') {
        console.error('Render error: Provided component is not a function.', componentFn);
        return;
    }

    const container = document.getElementById(targetId);
    if (!container) {
        console.error(`Render error: No DOM element with id "${targetId}".`);
        return;
    }

    try {
        currentComponentInstance?.cleanupFunction?.();
    } catch (err) {
        console.warn('Cleanup error:', err);
    }

    let instance;
    try {
        const result = await componentFn(props);

        if (!(result instanceof Component)) {
            console.error('Render error: Component function must return an instance of Component.');
            return;
        }

        instance = result;
    } catch (err) {
        console.error(`Render error in component '${componentFn.name || 'anonymous'}':`, err);
        return;
    }

    container.innerHTML = instance.html;

    try {
        instance.afterRender();
    } catch (err) {
        console.error(`afterRender error in component '${componentFn.name || 'anonymous'}':`, err);
    }

    currentComponentInstance = instance;
};

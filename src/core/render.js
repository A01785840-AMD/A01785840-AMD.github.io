/*
 * By Angel Montemayor Davila, A01785840
 * 7-APR-2025
 */


export default async function render (component, props = {}, targetId = 'app') {
    if (typeof component !== 'function') {
        console.error('Render error: Provided component is not a function.', component);
        return;
    }

    let result;

    try {
        result = await component(props);
    } catch (err) {
        console.error(`Render error in component '${component.name || 'anonymous'}':`, err);
        return;
    }

    if (!Array.isArray(result) || result.length !== 2) {
        console.error(`Render error: Component '${component.name || 'anonymous'}' should return [htmlString, afterMountFn]. Got:`, result);
        return;
    }

    const [html, afterMount] = result;

    if (typeof html !== 'string') {
        console.error(`Render error: First element returned by '${component.name || 'anonymous'}' must be an HTML string.`);
        return;
    }

    const container = document.getElementById(targetId);
    if (!container) {
        console.error(`Render error: No DOM element with id "${targetId}".`);
        return;
    }

    container.innerHTML = html;

    try {
        if (typeof afterMount === 'function') {
            afterMount();
        }
    } catch (err) {
        console.error(`afterMount error in component '${component.name || 'anonymous'}':`, err);
    }
};
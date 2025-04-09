/*
 * By Angel Montemayor Davila, A01785840
 * 7-APR-2025
 */
import {
    currentComponents,
    previousComponents,
    swapRegistries,
} from '@aether/lifeCycleState.js';


// Alias comp = component, compFn = componentFunction
export default async function render(compFn, props = {}, targetId = 'app') {
    const container = document.getElementById(targetId);
    if (!container) throw new Error(`No element with id "${targetId}"`);

    for (const comp of previousComponents.values()) {
        try {
            await comp.cleanupFunction?.();
        } catch (err) {
            console.warn(`Cleanup failed for ${comp.id}`, err);
        }
    }

    let instance;
    try {
        instance = await compFn(props);
    } catch (err) {
        console.error(`Render failed in component '${compFn.name || 'anonymous'}':`, err);
        return;
    }

    container.innerHTML = instance.html;

    for (const comp of currentComponents.values()) {
        try {
            await comp.afterRender?.();
        } catch (err) {
            console.warn(`afterRender failed for ${comp.id}`, err);
        }
    }

    swapRegistries();
}

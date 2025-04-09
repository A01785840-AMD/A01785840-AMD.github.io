/*
 * By Angel Montemayor Davila, A01785840
 * 7-APR-2025
 */
let componentId = 0;
const currentComponents = new Map();
const previousComponents = new Map();


function getNewComponentId() {
    return `component_${componentId++}`;
}

function swapRegistries() {
    previousComponents.clear();
    for (const [key, value] of currentComponents.entries()) {
        previousComponents.set(key, value);
    }
    currentComponents.clear();
}

function clearRegistries() {
    previousComponents.clear();
    currentComponents.clear();
}


export {
    currentComponents,
    previousComponents,
    getNewComponentId,
    swapRegistries,
    clearRegistries
};
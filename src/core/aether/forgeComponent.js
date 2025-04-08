/*
 * By Angel Montemayor Davila, A01785840
 * 7-APR-2025
 */
import Component from './Component.js';


function handleComponent(componentFn, props, ...children) {
    const result = componentFn(props, ...children);

    if (!(result instanceof Component)) {
        throw new Error(`Component '${componentFn.name}' must return an instance of Component.`);
    }

    return result.html;
}

function handleHtmlElement(tag, props, ...children) {
    const attrString = Object.entries(props)
        .filter(([key]) => key !== 'children')
        .map(([key, val]) => `${key}="${val}"`)
        .join(' ');

    const childHTML = (children || [])
        .map(child => typeof child === 'string' ? child : child.html)
        .join('');

    return `<${tag} ${attrString}>${childHTML}</${tag}>`;
}


export function forgeComponent(tag, props = {}, ...children) {
    props = props || {};
    children = (props.children || []).concat(children).flat();
    props.children = null;

    console.log({tag, props, children})

    if (typeof tag === 'function') {
        return handleComponent(tag, props, ...children);
    }

    return handleHtmlElement(tag, props, ...children);
}

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
    if (!tag) {
        console.error("Error: Missing tag in handleHtmlElement");
        return '';
    }

    props = props || {};

    const attrString = Object.entries(props)
        .filter(([key]) => key !== 'children' && key !== undefined && props[key] !== undefined)
        .map(([key, val]) => {
            try {
                return `${key}="${val}"`;
            } catch (err) {
                console.error(`Error processing attribute ${key}:`, err);
                return '';
            }
        })
        .filter(Boolean)
        .join(' ');

    const childHTML = (children || [])
        .filter(child => child !== null && child !== undefined)
        .map(child => {
            try {
                if (typeof child === 'string') return child;
                if (child && child.html) return child.html;

                // Handle unexpected child types
                console.warn(`Non-renderable child found in ${tag}:`, child);
                return String(child);
            } catch (err) {
                console.error(`Error rendering child in ${tag}:`, err);
                return '';
            }
        })
        .join('');

    const attrs = attrString ? ` ${attrString}` : '';
    return `<${tag}${attrs}>${childHTML}</${tag}>`;
}


export function forgeComponent(tag, props = {}, ...children) {
    props = props || {};
    children = (props.children || []).concat(children).flat();
    props.children = null;

    if (typeof tag === 'function') {
        return handleComponent(tag, props, ...children);
    }

    return handleHtmlElement(tag, props, ...children);
}

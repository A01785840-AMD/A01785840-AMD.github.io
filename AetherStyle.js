import MagicString from "magic-string";


const styleIdMap = new Map();

function simpleHash(str) {
    let hash = 5381;
    for (let i = 0; i < str.length; i++) {
        hash = (hash * 33) ^ str.charCodeAt(i);
    }
    return (hash >>> 0).toString(36);
}

function getScopedStyleId(css) {
    if (styleIdMap.has(css)) return styleIdMap.get(css);
    const id = simpleHash(css);
    styleIdMap.set(css, id);
    return id;
}

export default function aetherStylePlugin() {
    return {
        name: 'vite-plugin-aether-style',
        enforce: 'post',
        transform(code, id) {
            const s = new MagicString(code);
            const styleRegex = /<style[^>]*>([\s\S]*?)<\/style>/;
            const match = styleRegex.exec(code);
            if (!match) return;

            const rawCSS = match[1].trim();
            const styleStart = match.index;
            const styleEnd = styleStart + match[0].length;

            const scopedId = getScopedStyleId(rawCSS);
            const selector = `[data-aether="${scopedId}"]`;
            const scopedCSS = rawCSS.replace(/:host/g, selector);

            s.remove(styleStart, styleEnd);
            s.prepend(`import "/virtual-aether-style/${scopedId}.css";\n`);

            const rootTagStart = code.indexOf('<', styleEnd);
            const insertAt = rootTagStart + code.slice(rootTagStart).indexOf('>');
            s.appendLeft(insertAt, ` data-aether="${scopedId}"`);

            styleIdMap.set(scopedId, scopedCSS);

            return {
                code: s.toString(),
                map: s.generateMap()
            };
        },
        resolveId(id) {
            if (id.startsWith('/virtual-aether-style/')) return id;
            return null;
        },
        load(id) {
            if (id.startsWith('/virtual-aether-style/')) {
                const key = id.split('/').pop().replace('.css', '');
                return styleIdMap.get(key);
            }
            return null;
        }
    };
}
import { defineConfig } from 'vite'
import path from 'path'
import aetherStylePlugin from "./AetherStyle.js";


export default defineConfig(({ mode }) => {
    return {
        base: `/`,
        resolve: {
            alias: {
                '@': path.resolve(__dirname, 'src'),
                '@router': path.resolve(__dirname, 'src/core/router'),
                '@pages': path.resolve(__dirname, 'src/pages'),
                '@styles': path.resolve(__dirname, 'src/styles'),
                '@aether': path.resolve(__dirname, `src/core/aether`)
            }
        },
        esbuild: {
            jsxFactory: 'Aether.forgeComponent'
        },
        css: {
            modules: {
                localsConvention: 'camelCase',
                generateScopedName: '[name]__[local]___[hash:base64:5]'
            }
        },
        plugins: [
            aetherStylePlugin()
        ]
    };
});
import { defineConfig } from 'vite'
import path from 'path'

export default defineConfig(({ mode }) => {
    return {
        base: `/`,
        resolve: {
            alias: {
                '@': path.resolve(__dirname, 'src'),
                '@router': path.resolve(__dirname, 'src/core/router'),
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
    };
});
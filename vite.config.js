import { defineConfig } from 'vite'
import path from 'path'


export default defineConfig(({ mode }) => {
    return {
        base: `/`,
        resolve: {
            alias: {
                '@': path.resolve(__dirname, 'src'),
            }
        },
        css: {
            modules: {
                localsConvention: 'camelCase'
            }
        },
    };
});
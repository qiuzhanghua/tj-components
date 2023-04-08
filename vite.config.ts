import {defineConfig} from 'vite';
import solidPlugin from 'vite-plugin-solid';
import UnocssPlugin from '@unocss/vite';

export default defineConfig({
    plugins: [
        solidPlugin(),
        UnocssPlugin({}),
    ],
    server: {
        port: 3000,
    },
    build: {
        target: 'esnext',
        lib: {
            entry: 'src/index.ts',
            name: 'tj-counter',
            fileName: (format) => `tj-counter.${format}.js`
        }
    },
});

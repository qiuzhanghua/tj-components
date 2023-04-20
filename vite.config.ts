import {defineConfig} from "vite";
import solidPlugin from "vite-plugin-solid";
import UnocssPlugin from "@unocss/vite";

export default defineConfig({
    plugins: [
        solidPlugin(),
        UnocssPlugin({mode: "shadow-dom"}),
        // https://unocss.dev/integrations/vite#shadow-dom
    ],
    server: {
        port: 3000,
    },
    build: {
        target: "esnext",
        lib: {
            entry: "src/index.ts",
            name: "tj-counter",
            fileName: (format) => `tj-counter.${format}.js`
        },
        rollupOptions: {
            output: {
                globals: {
                    "solid-js": "Solid",
                    "solid-js/web": "Solid",
                    "unocss": "Unocss",
                }
            },
            external: ["solid-js", "solid-js/web", "unocss"],
        }
    },
});

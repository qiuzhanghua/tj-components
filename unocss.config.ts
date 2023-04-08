import { defineConfig } from '@unocss/vite';
import presetIcons from "@unocss/preset-icons";
import presetUno from "@unocss/preset-uno";
import {presetAttributify} from "unocss";

export default defineConfig({
    shortcuts: [{
        logo: "i-logos-solidjs-icon w-6em h-6em transform transition-800 hover:rotate-360"
    }],
    presets: [
        presetUno(),
        presetAttributify(),
        presetIcons({
            extraProperties: {
                "display": "inline-block",
                "vertical-align": "middle"
            }
        })
    ]
});

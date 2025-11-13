import { resolve } from 'path';
import { defineConfig } from 'vite';
import { imagetools } from "vite-imagetools"
import dts from "vite-plugin-dts"
import {libInjectCss} from "vite-plugin-lib-inject-css"

export default defineConfig({
  plugins: [imagetools(), dts({}), libInjectCss()],
  build: {
    lib: {
      entry: resolve(__dirname, "./src"),
      name: "marvel-app",
      fileName: "library",
    },
    rollupOptions: {
      external: ["react", "react-dom", "react/jsx"],
      output: {
        globals: {
          react: "React",
          "react-dom":"ReactDOM"
        }
      }
    }
  }
})
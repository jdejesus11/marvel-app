import { resolve } from 'path';
import { build, defineConfig } from 'vite';
import { imagetools } from "vite-imagetools"
import dts from "vite-plugin-dts"
import {libInjectCss} from "vite-plugin-lib-inject-css"
// import {react} from "@vitejs/plugin-react-swc"
import federation from '@originjs/vite-plugin-federation';

export default defineConfig({
 // plugins: [react()],
 build: {
  target: "esnext"
 }
})


/* export default defineConfig({
  plugins: [imagetools(), dts({}), libInjectCss()],
  build: {
    lib: {
      entry: resolve(__dirname, "./src/lib"),
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
}) */
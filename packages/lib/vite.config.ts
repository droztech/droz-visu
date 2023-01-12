import { resolve } from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import dts from "vite-plugin-dts";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    dts({ entryRoot: "./src/library", insertTypesEntry: true }),
  ],
  build: {
    lib: {
      entry: resolve(__dirname, "src/library/index.ts"),
      name: "compoaktion",
      formats: ["es", "umd"],
      fileName: (format) => `compoaktion.${format}.js`,
    },
    rollupOptions: {
      external: ["react", "react-dom"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
    },
  },
});

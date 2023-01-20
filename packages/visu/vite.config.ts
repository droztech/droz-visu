import { resolve } from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import dts from "vite-plugin-dts";
import path from "path";

export default defineConfig({
  plugins: [
    react(),
    dts({ entryRoot: "./src/library", insertTypesEntry: true }),
  ],
  build: {
    lib: {
      entry: resolve(__dirname, "src/library/index.ts"),
      name: "visu",
      formats: ["es", "umd"],
      fileName: (format) => `visu.${format}.js`,
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
  resolve: {
    alias: [
      { find: "@", replacement: path.resolve(__dirname, "") },
      {
        find: "@library",
        replacement: path.resolve(__dirname, "./src/library"),
      },
      { find: "@styles", replacement: path.resolve(__dirname, "./src/styles") },
    ],
  },
});

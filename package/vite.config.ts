import react from '@vitejs/plugin-react-swc'
import copy from 'rollup-plugin-copy'
import { defineConfig, UserConfig } from 'vite'
import dts from 'vite-plugin-dts'

import path from 'path'

export default defineConfig({
  plugins: [
    react() as UserConfig['plugins'],
    dts({ entryRoot: './src/library', insertTypesEntry: true }),
    copy({
      verbose: true,
      targets: [
        {
          src: ['src/theme/theme-plugin.js', 'src/theme/theme-plugin.d.ts'],
          dest: 'dist',
        },
      ],
      hook: 'writeBundle',
    }),
  ],
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/library/index.ts'),
      name: 'visu',
      formats: ['es', 'umd'],
      fileName: (format) => `visu.${format}.js`,
    },
    rollupOptions: {
      external: ['react', 'react-dom'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
      },
    },
  },
  resolve: {
    alias: [
      { find: '@', replacement: path.resolve(__dirname, '') },
      {
        find: '@library',
        replacement: path.resolve(__dirname, './src/library'),
      },
      {
        find: '@types',
        replacement: path.resolve(__dirname, './src/library/types'),
      },
    ],
  },
  esbuild: {
    banner: '"use client"',
  },
})

import { vitePlugin as remix } from "@remix-run/dev";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import { netlifyPlugin } from "@netlify/remix-adapter/plugin";

export default defineConfig({
    server: {
    port: 3000,
  },
   ssr: {
    noExternal: 
      ['@react-dnd/asap',
      '@react-dnd/invariant',
      '@react-dnd/shallowequal',
      'dnd-core',
      'react-dnd',
      'react-dnd-html5-backend']
  },
  plugins: [
    remix({
      future: {
        unstable_optimizeDeps: true,
      },
      ignoredRouteFiles: ["**/*.css"],
    }),
    netlifyPlugin(),
    tsconfigPaths(),
  ],
});
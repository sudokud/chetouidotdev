import { vitePlugin as remix } from "@remix-run/dev";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  server:{
    host: '0.0.0.0',
    port: 3000
  },
  plugins: [
    remix({
      ssr: false,
    }),
    tsconfigPaths(),
  ],
});

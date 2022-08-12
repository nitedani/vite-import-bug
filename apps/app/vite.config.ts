/// <reference types="vavite/vite-config" />
import { join } from "path";
import vavite from "vavite";
import { defineConfig } from "vite";

export default defineConfig({
  buildSteps: [
    {
      name: "server",
      config: {
        build: {
          rollupOptions: {
            output: {
              // We have to disable this for multiple entries
              inlineDynamicImports: false,
            },
          },
        },
      },
    },
  ],
  plugins: [
    vavite({
      serverEntry: join(__dirname, "server", "main.ts"),
      serveClientAssetsInDev: true,
    }),
  ],
});

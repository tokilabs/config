export * from "./vite.cjs";
export * from "./vitest.cjs";

// https://vitejs.dev/config/
export { defineConfig as viteConfig } from "vite";

// https://vitest.dev/guide/#configuring-vitest
export { defineConfig as vitestConfig, mergeConfig } from "vitest/config";

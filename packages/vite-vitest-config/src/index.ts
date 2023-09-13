export * from "./vite";
export * from "./vitest";

// https://vitejs.dev/config/
export { defineConfig as viteConfig } from "vite";

// https://vitest.dev/guide/#configuring-vitest
export { defineConfig as vitestConfig, mergeConfig } from "vitest/config";

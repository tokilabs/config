import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import { nxViteTsPaths } from "@nx/vite/plugins/nx-tsconfig-paths.plugin";
import tsconfigPaths from "vite-tsconfig-paths";
import dts from "vite-plugin-dts";
import * as path from "path";
import { findNodeModules } from "./util";
export const DEFAULT_VITE_OPTIONS = {
    enableSvelte: false,
    enableWorkers: false,
    returnJSON: false,
};
Object.freeze(DEFAULT_VITE_OPTIONS);
function getAppConfig(projectName, projectRoot, options) {
    const node_modules = findNodeModules(projectRoot);
    if (!node_modules) {
        throw new Error("Could not find node_modules directory at or above " + projectRoot);
    }
    const cacheDir = path.relative(projectRoot, path.join(node_modules, ".vite", projectName));
    const plugins = [options.enableSvelte && svelte(), tsconfigPaths(), nxViteTsPaths()];
    return {
        cacheDir,
        server: {
            fs: { allow: [".."] },
            port: 4200,
            host: "localhost",
        },
        preview: {
            port: 4300,
            host: "localhost",
        },
        plugins,
        worker: options.enableWorkers
            ? {
                plugins,
            }
            : undefined,
    };
}
function getLibConfig(projectName, options) {
    return {
        cacheDir: `../../../node_modules/.vite/${projectName}`,
        plugins: [
            dts({
                entryRoot: "src",
                tsConfigFilePath: path.join(__dirname, "tsconfig.lib.json"),
                skipDiagnostics: true,
            }),
            options.enableSvelte && svelte(),
            tsconfigPaths(),
            nxViteTsPaths(),
        ],
        // Uncomment this if you are using workers.
        // worker: {
        //  plugins: [ nxViteTsPaths() ],
        // },
        // Configuration for building your library.
        // See: https://vitejs.dev/guide/build.html#library-mode
        build: {
            target: "esnext",
            assetsInlineLimit: 100000000,
            chunkSizeWarningLimit: 100000000,
            cssCodeSplit: false,
            reportCompressedSize: false,
            lib: {
                // Could also be a dictionary or array of multiple entry points.
                entry: "src/index.ts",
                name: projectName,
                fileName: "index",
                // Change this to the formats you want to support.
                // Don't forget to update your package.json as well.
                formats: ["es", "cjs"],
            },
            rollupOptions: {
                inlineDynamicImports: true,
                // External packages that should not be bundled into your library.
                external: [],
            },
        },
    };
}
/**
 * Generates a base Vite configuration.
 *
 * Use {@link mergeConfig} to merge this configuration with your own.
 *
 * This configuration is tailored for nx integrated style projects.
 * Notably, it uses the `@nx/vite/plugins/nx-tsconfig-paths.plugin` plugin
 * and sets the `cacheDir` to `../../../node_modules/.vite/${projectName}`.
 *
 * Also, it uses the `vite-plugin-dts` plugin to generate type definitions
 * assuming that the entry point is `src/index.ts` and that the tsconfig
 * file is `tsconfig.lib.json`.
 *
 * @see {@link https://vitejs.dev/config/} for more information on Vite configuration.
 *
 * @param projectName The name of the project, use the same name of the project in Nx.
 * @param options The options to use when generating the configuration.
 * @returns A UserConfigExport returned by vite's defineConfig (the default) or a UserConfig the JSON representation of the configuration.
 */
export function generateViteConfig(projectType, projectName, projectRoot, options = DEFAULT_VITE_OPTIONS) {
    const plugins = [];
    options = { ...DEFAULT_VITE_OPTIONS, ...options };
    if (options.enableSvelte) {
        plugins.push(svelte());
    }
    let config;
    if (projectType === "app") {
        config = getAppConfig(projectName, projectRoot, options);
    }
    else {
        config = getLibConfig(projectName, options);
    }
    if (options.overrides) {
        config = { ...config, ...options.overrides };
    }
    if (options.returnJSON) {
        return config;
    }
    return defineConfig(config);
}
//# sourceMappingURL=vite.js.map
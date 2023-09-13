import { defineConfig } from "vitest/config";
import { findNodeModules } from "./lib/util.cjs";
import path from "path";
export const DEFAULT_VITEST_OPTIONS = {
    returnJSON: false,
};
/**
 * Generates a base Vitest configuration
 *
 * Use {@link mergeConfig} to merge this configuration with your own.
 *
 * This function returns a base Vitest configuration
 * with the following options:
 *
 * - `test.globals` is set to `true`
 * - `test.cache.dir` is set to `../../../node_modules/.vitest`
 * - `test.environment` is set to `node`
 * - `test.include` is set to all { test, spec }.{ js, cjs, cjs, ts, mts, cts, jsx, tsx } files in `src/**`
 */
export function generateVitestConfig(environment, projectRoot, options = DEFAULT_VITEST_OPTIONS) {
    const node_modules = findNodeModules(projectRoot);
    if (!node_modules) {
        throw new Error("Could not find node_modules directory at or above " + projectRoot);
    }
    const cacheDir = path.relative(projectRoot, path.join(node_modules, ".vitest"));
    const config = {
        test: {
            globals: true,
            cache: {
                dir: cacheDir,
            },
            environment,
            include: ["src/**/*.{test,spec}.{js,cjs,cjs,ts,mts,cts,jsx,tsx}"],
        },
    };
    if (options.returnJSON) {
        return config;
    }
    return defineConfig(config);
}
//# sourceMappingURL=vitest.cjs.map
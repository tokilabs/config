import { type UserConfig, type UserConfigExport } from "vitest/config";
export declare const DEFAULT_VITEST_OPTIONS: {
    returnJSON: boolean;
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
export declare function generateVitestConfig(environment: "jsdom" | "node", projectRoot: string, options?: Partial<typeof DEFAULT_VITEST_OPTIONS>): UserConfig | UserConfigExport;
//# sourceMappingURL=vitest.d.cts.map
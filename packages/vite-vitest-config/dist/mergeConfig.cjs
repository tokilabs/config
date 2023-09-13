import { mergeConfig as vitestMerge } from "vitest/config";
/**
 * Merges two Vite/Vitest configurations.
 *
 * You can also mix two configuration types.
 *
 * @see {@link https://vitejs.dev/config/} for Vite configuration options.
 * @see {@link https://vitest.dev/guide/#configuring-vitest} for Vitest configuration options.
 */
export function mergeConfig(defaults, overrides, isRoot) {
    return vitestMerge(defaults, overrides, isRoot);
}
//# sourceMappingURL=mergeConfig.cjs.map
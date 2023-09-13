import { mergeConfig as vitestMerge } from "vitest/config";

/**
 * Merges two Vite/Vitest configurations.
 *
 * You can also mix two configuration types.
 *
 * @see {@link https://vitejs.dev/config/} for Vite configuration options.
 * @see {@link https://vitest.dev/guide/#configuring-vitest} for Vitest configuration options.
 */
export function mergeConfig(
	defaults: Record<string, any>,
	overrides: Record<string, any>,
	isRoot?: boolean
): Record<string, any> {
	return vitestMerge(defaults, overrides, isRoot);
}

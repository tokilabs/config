import { type UserConfigExport } from "vite";
export declare const DEFAULT_VITE_OPTIONS: {
    enableSvelte: boolean;
    enableWorkers: boolean;
    returnJSON: boolean;
};
export type GenerateViteConfigOptions = Partial<typeof DEFAULT_VITE_OPTIONS> & {
    overrides?: UserConfigExport;
};
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
export declare function generateViteConfig(projectType: "app" | "lib", projectName: string, projectRoot: string, options?: GenerateViteConfigOptions): UserConfigExport;
//# sourceMappingURL=vite.d.cts.map
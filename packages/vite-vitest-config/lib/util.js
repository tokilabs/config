import { findUpSync } from "find-up";
import path from "path";
export function findNodeModules(startingDir) {
    return findUpSync("node_modules", { type: "directory", cwd: startingDir });
}
export function getCacheFolderFor(packageName, projectName) {
    try {
        const packagePath = require.resolve(packageName);
        return path.join(path.dirname(packagePath), ".cache", projectName);
    }
    catch (e) {
        throw new Error(`Could not find ${packageName} package. Make sure it is installed.`);
    }
}
//# sourceMappingURL=util.js.map
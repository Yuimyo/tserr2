import type { Linter } from "@typescript-eslint/utils/ts-eslint";

import noDefaultErrorType from "./no-default-error-type";

const rules = {
  "no-default-error-type": noDefaultErrorType,
} satisfies Linter.PluginRules;

const plugin = {
  meta: {
    name: "eslint-rules-plugin",
    version: "1.0.0",
  },
  rules: {
    ...rules,
  },
};
export default plugin;

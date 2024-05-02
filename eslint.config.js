import globals from "globals";
import pluginJs from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";
import tseslint from "typescript-eslint";
import pluginReactConfig from "eslint-plugin-react/configs/recommended.js";
import importPlugin from "eslint-plugin-import";
import localRulesPlugin from "eslint-local";
const compat = new FlatCompat();

export default tseslint.config(
  {
    ignores: [
      "node_modules",
      ".cache",
      "build",
      "public/build",
      ".env",
      "!**/.server",
      "!**/.client",
      "eslint_local",
    ],
  },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReactConfig,
  {
    name: "TypeScript",
    files: ["**/*.{ts,tsx}"],
    plugins: {
      import: importPlugin,
      "typescript-eslint": tseslint,
      "local-rules": localRulesPlugin,
    },
    extends: [
      ...tseslint.configs.recommended,
      ...compat.config(importPlugin.configs.recommended),
      ...compat.config(importPlugin.configs.typescript),
      ...localRulesPlugin.configs.all,
    ],
    rules: {
      "@typescript-eslint/no-unused-vars": ["off", {}],
      // "@local-rules/no-default-error-type": "off",
    },
    settings: {
      "import/resolver": {
        node: {
          extensions: [".ts", ".tsx"],
        },
        typescript: {
          alwaysTryTypes: true,
          project: "tsconfig.json",
        },
      },
    },
  }
);

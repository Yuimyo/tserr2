import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReactConfig from "eslint-plugin-react/configs/recommended.js";

export default tseslint.config(
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReactConfig,
  {
    name: "TypeScript",
    files: ["**/*.{ts,tsx}"],
    plugins: {
      // import: importPlugin,
      "typescript-eslint": tseslint,
    },
    extends: [
      // ...tseslint.configs.recommended,
      // ...compat.config(importPlugin.configs.recommended),
      // ...compat.config(importPlugin.configs.typescript),
    ],
    rules: {
      "@typescript-eslint/no-unused-vars": ["off", {}],
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

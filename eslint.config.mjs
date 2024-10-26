// eslint.config.mjs
import globals from "globals";
import pluginJs from "@eslint/js";
import customPlugin from "./eslint-plugin-custom.js";

export default [
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  {
    files: ["**/*.js"],
    languageOptions: {
      ecmaVersion: "latest",
    },
    plugins: {
      custom: customPlugin,
    },
    rules: {
      "custom/function-prefix-helper": "warn",
      "custom/variable-camelcase": "warn",
      "custom/no-console-log": "error",
    },
  },
];

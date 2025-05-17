import js from "@eslint/js";
import globals from "globals";
import stylistic from '@stylistic/eslint-plugin';
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs}"],
    languageOptions: {
      globals: globals.browser
    },
    plugins: {
      js,
      "@stylistic/js": stylisticJs
    },
    extends: ["js/recommended"],
    rules: {
      curly: "error",
      "@stylistic/js/semi": ["error", "always"],
      "@stylistic/js/brace-style": "error",
      "@stylistic/js/indent": ["error", 2, { "SwitchCase": 1 }],
      "@stylistic/js/max-statements-per-line": ["error", { "max": 1 }]
    }
  }
]);

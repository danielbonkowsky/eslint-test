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
      "@stylistic": stylistic
    },
    extends: ["js/recommended"],
    rules: {
      curly: "error",
      "@stylistic/semi": ["error", "always"],
      "@stylistic/brace-style": "error",
      "@stylistic/indent": ["error", 2, { "SwitchCase": 1 }],
      "@stylistic/max-statements-per-line": ["error", { "max": 1 }]
    }
  }
]);

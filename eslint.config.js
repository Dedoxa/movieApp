import path from "node:path";
import { fileURLToPath } from "node:url";

import js from "@eslint/js";
import globals from "globals";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import jsA11y from "eslint-plugin-jsx-a11y";
import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended";
import babelParser from "@babel/eslint-parser";
import importPlugin from 'eslint-plugin-import';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default [
  importPlugin.flatConfigs.recommended,
  {
    ignores: [
      "**/node_modules",
      "**/dist",
      "**/build",
      "**/node_modules",
      ".vscode",
      ".git",
    ],
  },
  {
    files: ["**/*.{js,mjs,cjs,jsx,mjsx,ts,tsx,mtsx}"], // Паттерн файлов, к которым применяются правила
    languageOptions: {
      parser: babelParser,
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: "latest",
        ecmaFeatures: { jsx: true },
        babelOptions: {
          configFile: path.resolve(__dirname, "babel.config.json"),
        },
        sourceType: "module",
      },
    },
    settings: {
      react: {
        version: "18.3",
      },
    },
    plugins: {
      react,
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
      "jsx-a11y": jsA11y,
    },
    rules: {
      ...js.configs.recommended.rules,
      ...react.configs.recommended.rules,
      ...react.configs["jsx-runtime"].rules,
      ...reactHooks.configs.recommended.rules,
      "import/default": 0,
      "import/no-named-as-default": 0,
      "import/no-named-as-default-member": 0,
      strict: 0,
      "import/namespace": "off",
      "react/jsx-no-target-blank": "off",
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true },
      ],
      "jsx-a11y/alt-text": "error",
      indent: ["error", 2, { SwitchCase: 1 }],
      "prettier/prettier": "error",
      "linebreak-style": [0, "unix"],
      quotes: ["error", "single"],
      semi: ["error", "never"],
      "react/react-in-jsx-scope": "off",
      "react/prop-types": 0,

      "import/no-unresolved": [
        2,
        {
          caseSensitive: false,
        },
      ],

      "react/jsx-filename-extension": [
        1,
        {
          extensions: [".js", ".jsx"],
        },
      ],

      "import/order": [
        2,
        {
          groups: [
            "builtin",
            "external",
            "internal",
            "parent",
            "sibling",
            "index",
          ],
          "newlines-between": "always",
        },
      ],
    },
  },
  eslintPluginPrettierRecommended,
];

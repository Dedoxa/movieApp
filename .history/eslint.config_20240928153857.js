import path from "node:path";
import { fileURLToPath } from "node:url";

import js from "@eslint/js";
import globals from "globals";
import react from "eslint-plugin-react";
// import reactHooks from 'eslint-plugin-react-hooks';
// import reactRefresh from 'eslint-plugin-react-refresh';  // Отключим временно этот плагин
import jsA11y from "eslint-plugin-jsx-a11y";
import eslintConfigPrettier from "eslint-config-prettier";
import eslintPluginPrettierRecommended from "eslint-plugin-prettier";
import babelParser from "@babel/eslint-parser";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default [
  {
    ignores: ["dist"], // Укажите глобальные игнорируемые файлы
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
      // 'react-hooks': reactHooks,
      // 'react-refresh': reactRefresh,  // Удалён временно
      "jsx-a11y": jsA11y,
    },
    rules: {
      ...js.configs.recommended.rules,
      ...react.configs.recommended.rules,
      ...react.configs["jsx-runtime"].rules,
      ...reactHooks.configs.recommended.rules,
      "react/jsx-no-target-blank": "off",
      // 'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],  // Удалено временно
      "jsx-a11y/alt-text": "error",
    },
  },
  eslintPluginPrettierRecommended,
  eslintConfigPrettier,
];

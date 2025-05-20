// eslint.config.js
import { dirname } from 'path';
import { fileURLToPath } from 'url';

import { FlatCompat } from '@eslint/eslintrc';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const tsEslintPlugin = await import('@typescript-eslint/eslint-plugin');
const simpleImportSortPlugin = await import('eslint-plugin-simple-import-sort');
const tsParser = await import('@typescript-eslint/parser');

const eslintConfig = [
  ...compat.extends(
    'next/core-web-vitals',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:prettier/recommended',
  ),
  {
    ignores: ['.next', 'node_modules', 'eslint.config.mjs'],
  },
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    languageOptions: {
      parser: tsParser.default,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        project: './tsconfig.json',
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    plugins: {
      '@typescript-eslint': tsEslintPlugin.default,
      'simple-import-sort': simpleImportSortPlugin.default,
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
    rules: {
      // ✅ General
      'no-console': 'warn',
      'no-debugger': 'warn',
      'import/no-anonymous-default-export': 'off',

      // ✅ TypeScript
      '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
      '@typescript-eslint/no-explicit-any': ['warn', { ignoreRestArgs: true }],
      '@typescript-eslint/consistent-type-imports': 'warn',
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/no-unused-expressions': 'warn',
      '@typescript-eslint/no-empty-object-type': 'off',

      // ✅ React
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
      'react/self-closing-comp': 'warn',
      'react/jsx-boolean-value': ['warn', 'never'],
      'react/react-in-jsx-scope': 'off',
      'react/prop-types': 'off',

      // ✅ React 19 / Next.js App Router
      'react/jsx-no-useless-fragment': 'off',
      'react/no-unstable-nested-components': 'warn',
      'react/jsx-no-leaked-render': 'warn',

      // ✅ Import Sort
      'simple-import-sort/imports': 'warn',
      'simple-import-sort/exports': 'warn',
      'import/order': 'off', // ปิดเพราะใช้ simple-import-sort แทน

      // ✅ ปิดกฎที่ Prettier จัดการให้แล้ว
      'prettier/prettier': 'warn',
    },
  },
];

export default eslintConfig;

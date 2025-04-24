import { dirname } from 'path';
import { fileURLToPath } from 'url';

import { FlatCompat } from '@eslint/eslintrc';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const tsEslintPlugin = await import('@typescript-eslint/eslint-plugin');

export default [
  ...compat.extends(
    'next/core-web-vitals',
    'next/typescript',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
  ),
  {
    ignores: ['.next', 'node_modules'],
  },
  {
    files: ['**/*.ts', '**/*.tsx'],
    languageOptions: {
      parser: (await import('@typescript-eslint/parser')).default,
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
    },
    rules: {
      '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
      '@typescript-eslint/no-explicit-any': 'warn',
    },
  },
  {
    files: ['**/*.js', '**/*.jsx'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
  },
  {
    rules: {
      // คำแนะนำทั่วไป
      'no-console': 'warn',
      'no-debugger': 'warn',
      'import/no-anonymous-default-export': 'off',

      // ✅ TypeScript
      '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/consistent-type-imports': 'warn',
      '@typescript-eslint/explicit-function-return-type': 'off', // ปิดถ้ารำคาญตอน dev
      '@typescript-eslint/no-unused-expressions': ['warn'], // หรือ 'off' ก็ได้ถ้าไม่อยากใช้
      '@typescript-eslint/no-empty-object-type': 'off', // ปิดไม่ให้ ESLint แจ้งเตือนเกี่ยวกับการใช้ {}

      // ✅ React
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
      'react/self-closing-comp': 'warn',
      'react/jsx-boolean-value': ['warn', 'never'],
      'react/react-in-jsx-scope': 'off',
      'react/prop-types': 'off', // ปิดการตรวจสอบ prop-types

      // ✅ Next.js App Router / React 19
      'react/jsx-no-useless-fragment': 'warn',
      'react/no-unstable-nested-components': 'warn', // ป้องกัน inline fn ใน JSX
      'react/jsx-no-leaked-render': 'warn', // React 19-specific

      // ✅ Import Order (ให้โค้ดสวย เป็นระบบ)
      'import/order': [
        'warn',
        {
          groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
          pathGroups: [
            {
              pattern: 'react',
              group: 'external',
              position: 'before',
            },
            {
              pattern: 'next/**',
              group: 'external',
              position: 'before',
            },
          ],
          pathGroupsExcludedImportTypes: ['react'],
          'newlines-between': 'always',
          alphabetize: { order: 'asc', caseInsensitive: true },
        },
      ],
    },
  },
];

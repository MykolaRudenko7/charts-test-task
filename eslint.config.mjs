import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { FlatCompat } from '@eslint/eslintrc';
import eslintConfigPrettier from 'eslint-config-prettier';
import eslintPluginReact from 'eslint-plugin-react';
import eslintPluginReactHooks from 'eslint-plugin-react-hooks';
import eslintPluginImport from 'eslint-plugin-import';
import eslintPluginUnicorn from 'eslint-plugin-unicorn';
import eslintPluginJsxA11y from 'eslint-plugin-jsx-a11y';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends('next/core-web-vitals', 'next/typescript'),
  eslintConfigPrettier,
  {
    plugins: {
      react: eslintPluginReact,
      'react-hooks': eslintPluginReactHooks,
      import: eslintPluginImport,
      unicorn: eslintPluginUnicorn,
      'jsx-a11y': eslintPluginJsxA11y,
    },
    rules: {
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
      'import/order': [
        'error',
        {
          groups: [
            'builtin',
            'external',
            'internal',
            'parent',
            'sibling',
            'index',
          ],
        },
      ],
      'unicorn/prevent-abbreviations': [
        'error',
        {
          allowList: {
            generateStaticParams: true,
          },
        },
      ],
      'jsx-a11y/alt-text': 'error',
    },
  },
];

export default eslintConfig;

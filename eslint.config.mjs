import { dirname } from 'path';
import { fileURLToPath } from 'url';

import { FlatCompat } from '@eslint/eslintrc';
import js from '@eslint/js';
import tsParser from '@typescript-eslint/parser';
import { defineConfig } from 'eslint/config';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
});

const eslintConfig = defineConfig([
  ...compat.extends(
    'next/core-web-vitals',
    'next/typescript',
    'eslint-config-dotori-base',
    'eslint-config-dotori-typescript',
    'eslint-config-dotori-react',
    'eslint-config-dotori-import-sort'
  ),
  {
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        project: './tsconfig.json',
      },
    },
  },
  {
    rules: {
      '@typescript-eslint/naming-convention': [
        'error',
        {
          selector: 'variable',
          format: ['strictCamelCase', 'UPPER_CASE', 'StrictPascalCase'],
          leadingUnderscore: 'allowDouble',
        },
      ],
    },
  },
]);

export default eslintConfig;

module.exports = {
  env: {
    browser: true,
    es2020: true,
    jest: true,
  },
  extends: ['plugin:react/recommended', 'plugin:react-hooks/recommended', 'standard', 'plugin:prettier/recommended'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2020,
    sourceType: 'module',
    tsconfigRootDir: __dirname,
    project: ['./packages/visu/tsconfig.json', './apps/docs/tsconfig.json', './apps/web/tsconfig.json'],
  },
  plugins: ['unused-imports', 'react', 'jsx-a11y', '@typescript-eslint'],
  rules: {
    'unused-imports/no-unused-imports': 'error',
    'no-undef': 'off',
    'no-unused-vars': ['warn', { varsIgnorePattern: '_' }],
    'prettier/prettier': [
      'warn',
      {
        printWidth: 120,
        tabWidth: 2,
        singleQuote: true,
        trailingComma: 'all',
        arrowParens: 'always',
        semi: false,
        endOfLine: 'auto',
      },
    ],
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': 'off',
    'jsx-a11y/alt-text': [
      'warn',
      {
        elements: ['img'],
        img: ['Image'],
      },
    ],
    'jsx-a11y/aria-props': 'warn',
    'jsx-a11y/aria-proptypes': 'warn',
    'jsx-a11y/aria-unsupported-elements': 'warn',
    'jsx-a11y/role-has-required-aria-props': 'warn',
    'jsx-a11y/role-supports-aria-props': 'warn',
  },
  settings: {
    react: {
      version: 'detect',
    },
    'import/parsers': {
      [require.resolve('@typescript-eslint/parser')]: ['.ts', '.tsx', '.d.ts'],
    },
  },
}

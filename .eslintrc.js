module.exports = {
    env: {
        browser: true,
        es2021: true,
        jest: true,
    },
    extends: [
        'plugin:react/recommended',
        'airbnb',
        'plugin:i18next/recommended',
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    plugins: ['react', '@typescript-eslint', 'i18next', 'react-hooks'],
    rules: {
        'react/jsx-indent': [2, 4],
        'react/jsx-indent-props': [2, 4],
        indent: [2, 4],
        'react/jsx-filename-extension': [
            2,
            { extensions: ['.js', '.jsx', '.tsx'] },
        ],
        'import/no-unresolved': 'off',
        'import/prefer-default-export': 'off',
        'no-unused-vars': 'off',
        'react/react-in-jsx-scope': 'off',
        'react/require-default-props': 'off',
        'react/function-component-definition': 'off',
        'react/jsx-props-no-spreading': 'warn',
        'no-shadow': 'off',
        'import/extensions': 'off',
        'import/no-extraneous-dependencies': 'off',
        'no-underscore-dangle': 'off',
        'i18next/no-literal-string': [2, {
            markupOnly: true,
            ignoreAttribute: ['to', 'data-testid'],
        }],
        'max-len': ['error', { ignoreComments: true, code: 120 }],
        '@typescript-eslint/no-unused-vars': [
            'warn', { argsIgnorePattern: '^_' },
        ],
        'jsx-a11y/no-static-element-interactions': 'off',
        'jsx-a11y/click-events-have-key-events': 'off',
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'error',
        'no-param-reassign': 'off',
        'no-undef': 'off',
    },
    globals: {
        __IS_DEV__: true,
        __API__: true,
    },
    overrides: [{
        files: ['**/src/**/*.test.{ts,tsx}', '**/src/**/*.stories.{ts,tsx}'],
        rules: {
            'i18next/no-literal-string': 'off',
            'max-len': 'off',
        },
    }],
};

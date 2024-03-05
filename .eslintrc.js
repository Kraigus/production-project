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
        "prettier"
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    plugins: [
        'react',
        '@typescript-eslint',
        'i18next',
        'react-hooks',
        'fds-import-checker',
        'unused-imports',
    ],
    rules: {
        'unused-imports/no-unused-imports': 'error',
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
        'react/jsx-props-no-spreading': 'off',
        'no-shadow': 'off',
        'import/extensions': 'off',
        'import/no-extraneous-dependencies': 'off',
        'no-underscore-dangle': 'off',
        'i18next/no-literal-string': [
            2,
            {
                markupOnly: true,
                ignoreAttribute: [
                    'as',
                    'role',
                    'justify',
                    'align',
                    'direction',
                    'to',
                    'data-testid',
                    'target',
                    'fallback',
                    'border',
                ],
            },
        ],
        'max-len': ['error', { ignoreComments: true, code: 120 }],
        'jsx-a11y/no-static-element-interactions': 'off',
        'jsx-a11y/click-events-have-key-events': 'off',
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'error',
        'no-param-reassign': 'off',
        'no-undef': 'off',
        'no-console': 'off',
        'react/no-array-index-key': 'off',
        'arrow-body-style': 'off',
        'fds-import-checker/path-checker': ['error', { alias: '@' }],
        'fds-import-checker/public-api-imports': [
            'error',
            {
                alias: '@',
                testFilesPatterns: [
                    '**/*.test.ts',
                    '**/*.test.ts',
                    '**/StoreDecorator.tsx',
                ],
            },
        ],
        'fds-import-checker/layer-imports': [
            'error',
            {
                alias: '@',
                ignoreImportPatterns: ['**/StoreProvider', '**/testing'],
            },
        ],
        'linebreak-style': ['off', 'unix'],
        'react/jsx-max-props-per-line': ['error', { maximum: 4 }],
    },
    globals: {
        __IS_DEV__: true,
        __API__: true,
        __PROJECT__: true,
    },
    ignorePatterns: ['..fttemplates/*'],
    overrides: [
        {
            files: [
                '**/src/**/*.test.{ts,tsx}',
                '**/src/**/*.stories.{ts,tsx}',
            ],
            rules: {
                'i18next/no-literal-string': 'off',
                'max-len': 'off',
            },
        },
    ],
};

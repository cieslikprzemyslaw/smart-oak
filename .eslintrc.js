module.exports = {
    globals: {
        __PATH_PREFIX__: true,
    },
    env: {
        browser: true,
    },
    parser: 'babel-eslint',
    rules: {
        'react/prop-types': 0,
    },
    extends: ['eslint:recommended', 'plugin:react/recommended', 'plugin:react-hooks/recommended'],
};
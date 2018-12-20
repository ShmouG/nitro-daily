module.exports = {
    extends: 'airbnb',
    parser: "babel-eslint",
    env: {
        node: true,
        es6: true,
        mongo: true,
        jest: true,
        browser: true,
    },
    rules: {
        'react/jsx-filename-extension': 0,
        'indent': ['error', 2],
        'global-require': 1
    }
};
module.exports = {
    "extends": "airbnb",
    "plugins": [
        "react",
        "jsx-a11y",
        "import"
    ],
    "rules": {
        "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
        "react/prefer-stateless-function": [0],
        "react/jsx-tag-spacing": [0],
    },
    "globals": {
        "window": true,
        "document": true,
        "navigator": true,
    }
};
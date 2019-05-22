const warnOnDev = process.env.NODE_ENV === 'production' ? 'error' : 'warn';

module.exports = {
	extends: [
		"eslint:recommended",
		"plugin:vue/recommended",
	],
	"env": {
		"browser": true,
		"node": true,
	},
	"rules": {
        "indent": [
            "warn",
            "tab"
        ],
        "no-unused-vars": ["warn", { "vars": "all" }],
        "quotes": [
            "error",
            "single"
        ],
        "semi": [
            "error",
            "always"
        ],
        "no-shadow": ["error", {
            "builtinGlobals": false,
            "hoist": "functions",
            "allow": ["state", "getters"]
        }],
        "no-param-reassign": ["error", {
            "props": true,
            "ignorePropertyModificationsFor": ["state"]
        }],
        "no-use-before-define": ["error", {
            "functions": false,
            "classes": true
        }],
        "eqeqeq": ["error", "smart"],
        "consistent-return": ["warn"],
        "prefer-destructuring": ["error", {
            "object": true,
            "array": false
        }],
        "import/no-extraneous-dependencies": ["off"],
        "no-console": warnOnDev,
        "no-debugger": warnOnDev,
        "newline-before-return": ["warn"],
    }
};

export default {
  extends: ["stylelint-config-standard", "@stylistic/stylelint-config"],
  rules: {
    "at-rule-no-unknown": [
      true,
      {
        ignoreAtRules: ["theme", "apply", "layer", "plugin", "source", "tailwind", "utility", "variant"],
      },
    ],
    "function-no-unknown": [
      true,
      {
        ignoreFunctions: ["theme"],
      },
    ],
    "import-notation": null,
    "no-invalid-position-at-import-rule": null,
    "no-descending-specificity": null,
    "no-duplicate-selectors": null,
    "@stylistic/max-line-length": [120, { ignorePattern: "/^\\s*@apply\\s/" }],
  },
};

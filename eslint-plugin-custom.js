// eslint-plugin-custom.js
import functionPrefixHelper from "./rules/function-prefix-helper.js";
import variableCamelcase from "./rules/variable-camelcase.js";
import noConsoleLogs from "./rules/no-console-log.js";
export default {
    rules: {
        "function-prefix-helper": functionPrefixHelper,
        "variable-camelcase": variableCamelcase,
        "no-console-log": noConsoleLogs
    },
};

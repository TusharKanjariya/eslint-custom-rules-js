// rules/variable-camelcase.js
export default {
    meta: {
        type: "suggestion",
        docs: {
            description: "Enforce camelCase naming convention for variables",
            category: "Stylistic Issues",
            recommended: false,
        },
        schema: [],
        messages: {
            camelCase: "Variable '{{ name }}' should be in camelCase.",
        },
    },
    create(context) {
        return {
            VariableDeclarator(node) {
                const variableName = node.id.name;
                const camelCasePattern = /^[a-z][a-zA-Z0-9]*$/;
                if (!camelCasePattern.test(variableName)) {
                    context.report({
                        node: node.id,
                        messageId: "camelCase",
                        data: { name: variableName },
                    });
                }
            },
        };
    },
};

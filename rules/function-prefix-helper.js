// rules/function-prefix-helper.js
export default {
    meta: {
        type: "suggestion",
        docs: {
            description: "Require function names to start with 'helper'",
            category: "Stylistic Issues",
            recommended: false,
        },
        schema: [],
        hasSuggestions: true,
        messages: {
            helperPrefix: "Function '{{ name }}' should start with 'helper'.",
        },
    },
    create(context) {
        return {
            FunctionDeclaration(node) {
                const functionName = node.id.name;
                if (!functionName.startsWith("helper")) {
                    context.report({
                        node,
                        messageId: "helperPrefix",
                        data: { name: functionName },
                    });
                }
            },
            FunctionExpression(node) {
                if (node.id) {
                    const functionName = node.id.name;
                    if (!functionName.startsWith("helper")) {
                        context.report({
                            node,
                            messageId: "helperPrefix",
                            data: { name: functionName },
                        });
                    }
                }
            },
            ArrowFunctionExpression(node) {
                if (node.parent.type === "VariableDeclarator") {
                    const functionName = node.parent.id.name;
                    if (!functionName.startsWith("helper")) {
                        context.report({
                            node: node.parent.id,
                            messageId: "helperPrefix",
                            data: { name: functionName },
                        });
                    }
                }
            },
        };
    },
};

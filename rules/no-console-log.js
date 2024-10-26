// rules/no-console-log.js
export default {
    meta: {
        type: "problem", // This rule is a problem
        docs: {
            description: "disallow console.log but allow console.error",
            category: "Possible Errors",
            recommended: false,
        },
        schema: [], // No options
        messages: {
            unexpected: "Unexpected console.log found.",
        },
    },
    create(context) {
        return {
            CallExpression(node) {
                // Check if the call expression is a console.log
                if (
                    node.callee.type === "MemberExpression" &&
                    node.callee.object.name === "console" &&
                    node.callee.property.name === "log"
                ) {
                    context.report({
                        node,
                        messageId: "unexpected",
                    });
                }
            },
        };
    },
};

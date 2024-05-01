import { AST_NODE_TYPES, ESLintUtils } from "@typescript-eslint/utils";
export default ESLintUtils.RuleCreator.withoutDocs({
    create(context) {
        return {
            NewExpression(node) {
                if (node.callee.type == AST_NODE_TYPES.Identifier &&
                    node.callee.name == "Error") {
                    context.report({
                        node: node,
                        messageId: "defaulterror",
                    });
                }
            },
        };
    },
    meta: {
        type: "problem",
        docs: {
            description: "disallow the use of the `Omit` utility type",
        },
        messages: {
            defaulterror: "The `Omit` utility type is forbidden",
        },
        schema: [],
    },
    defaultOptions: [],
});

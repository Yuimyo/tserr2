import { AST_NODE_TYPES, ESLintUtils } from "@typescript-eslint/utils";

const createRule = ESLintUtils.RuleCreator(
    (name) => `https://example.com/rule/${name}`,
);

export default createRule({
    create(context) {
        return {
            NewExpression(node) {
                if (
                    node.callee.type == AST_NODE_TYPES.Identifier &&
                    node.callee.name == "Error"
                ) {
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
    name: "no-default-error-type",
    defaultOptions: [],
});

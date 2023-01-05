import { createRule } from './utils'

// Type: RuleModule<"lowercase", ...>
const lowercaseFirstDeclarationsRule = createRule({
  create(context) {
    return {
      FunctionDeclaration(node) {
        if (node.id != null) {
          if (/^[A-Z]/.test(node.id.name)) {
            context.report({
              messageId: 'lowercase',
              node: node.id,
            })
          }
        }
      },
    }
  },
  name: 'lowercase-first-declarations',
  meta: {
    docs: {
      description:
        'Function declaration names should start with a lower-case letter.',
      recommended: 'warn',
    },
    messages: {
      lowercase: 'Start this name with an lower-case letter.',
    },
    type: 'suggestion',
    schema: [],
  },
  defaultOptions: [],
})

export default lowercaseFirstDeclarationsRule

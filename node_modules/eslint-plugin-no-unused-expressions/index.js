'use strict'

const MESSAGE = 'Unused expressions must be prefixed with void'

function isVoid(e) {
  return e.type === 'UnaryExpression' && e.operator === 'void'
}

function isAssignment(e) {
  return e.type === 'AssignmentExpression'
}

function isDelete(e) {
  return e.type === 'UnaryExpression' && e.operator === 'delete'
}

function isUseStrict(e) {
  return e.type === 'Literal' && e.value === 'use strict'
}

function isValidExpressionStatement(node) {
  const e = node.expression
  return isVoid(e) || isAssignment(e) || isDelete(e) || isUseStrict(e)
}

function noUnusedExpressions(context) {
  return {
    ExpressionStatement: node => {
      if (!isValidExpressionStatement(node)) {
        context.report({node: node, message: MESSAGE})
      }
    }
  }
}

module.exports.rules = {
  'no-unused-expressions': {
    create: noUnusedExpressions,
    meta: {
      schema: []
    }
  }
}

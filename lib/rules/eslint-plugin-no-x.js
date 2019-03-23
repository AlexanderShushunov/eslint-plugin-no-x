/**
 * @fileoverview no x in names of classes
 * @author Alexander Shushunov
 */
"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
    meta: {
        docs: {
            description: "no x in names of classes",
            category: "Fill me in",
            recommended: false
        },
        fixable: null,  // or "code" or "whitespace"
        schema: [
            // fill in your schema
        ]
    },

    create: function(context) {

        return {
            "Identifier": function (node) {
                if (
                    node.parent && node.parent.type === "ClassDeclaration" &&
                    node.name.includes('x')
                ) {
                    context.report({
                        node,
                        message: 'Class name contains x.'
                    })
                }
            },

        };
    }
};

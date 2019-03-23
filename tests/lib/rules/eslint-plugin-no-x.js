/**
 * @fileoverview no x in names of classes
 * @author Alexander Shushunov
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var rule = require("../../../lib/rules/eslint-plugin-no-x"),

    RuleTester = require("eslint").RuleTester;


//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------
const parserOptions = {
    ecmaVersion: 2018
};

var ruleTester = new RuleTester({parserOptions});
ruleTester.run("eslint-plugin-no-x", rule, {

    valid: [
        "class Foo {}",
        `class Foo {
            propx() {}
        }`
    ],

    invalid: [
        {
            code: "class Foox {}",
            errors: [{
                message: "Class name contains x.",
                type: "Identifier"
            }]
        }
    ]
});

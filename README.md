# eslint-plugin-no-x

no x in names of classes

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm i eslint --save-dev
```

Next, install `eslint-plugin-no-x`:

```
$ npm install eslint-plugin-no-x --save-dev
```

**Note:** If you installed ESLint globally (using the `-g` flag) then you must also install `eslint-plugin-no-x` globally.

## Usage

Add `no-x` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "no-x"
    ]
}
```


Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "no-x/rule-name": 2
    }
}
```

## Supported Rules

* Fill in provided rules here






# eslint-plugin-no-unused-expressions

ESLint plugin to disallow unused expressions

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm i eslint --save-dev
```

Next, install `eslint-plugin-no-unused-expressions`:

```
$ npm install eslint-plugin-no-unused-expressions --save-dev
```

**Note:** If you installed ESLint globally (using the `-g` flag) then you must also install `eslint-plugin-no-unused-expressions` globally.

## Usage

Add `no-unused-expressions` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "no-unused-expressions"
    ]
}
```


Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "no-unused-expressions/no-unused-expressions": 2
    }
}
```

# @double/eslint-config

## Install

```
yarn add --dev git://github.com/withDouble/eslint-config.git
```

## Usage

Add this to your .eslintrc file:

```json
{
  "extends": "@double"
}
```

## Rules

Follows [JavaScript Standard Style](https://github.com/standard/standard/blob/master/RULES.md) and [Flowtype plugin recommended](https://github.com/gajus/eslint-plugin-flowtype/blob/master/src/configs/recommended.json) rules, with additions/exceptions:

* __Else/Catch/Finally statements__ must be on their own line after the preceding closing brace.

  eslint: [`brace-style`](http://eslint.org/docs/rules/brace-style)

  ```js
  // ✓ ok
  if (condition) {
    // ...
  }
  else {
    // ...
  }
  ```

  ```js
  // ✗ avoid
  if (condition) {
    // ...
  } else {
    // ...
  }
  ```

* __Trailing commas on each line if multiline__

  eslint: [`comma-dangle`](http://eslint.org/docs/rules/comma-dangle)

  ```js
    const him = {
      name: 'John',
      message: 'hello'   // ✗ avoid
    }

    const her = {
      name: 'Jane',
      message: 'hi',     // ✓ ok
    }
  ```

* __No `var`__, use `const` or `let` instead

  eslint: [`no-var`](http://eslint.org/docs/rules/no-var)

  ```js
    // ✗ avoid
    var him = 'John'

    // ✓ ok
    const her = 'Jane'
    let it = 'Rex'
  ```

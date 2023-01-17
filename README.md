# @withdouble/eslint-config

Double’s central ESLint config

## Install

```
npm i -D \
  @withdouble/eslint-config \
  @typescript-eslint/eslint-plugin \
  eslint \
  eslint-plugin-prettier \
  eslint-plugin-promise \
  eslint-plugin-react \
  eslint-plugin-react-hooks
```

## Usage

Add this to your `package.json` file:

```json
"eslintConfig": {
  "extends": "@withdouble/eslint-config/web"
}
```

or in your `.eslintrc` file:

```json
{
  "extends": "@withdouble/eslint-config/web"
}
```

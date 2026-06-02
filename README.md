# @withdouble/eslint-config

Double’s central ESLint config.

**v5+** supports ESLint 7 and 8. Use v4 if you must stay on the old peer range (`eslint@^7` only).

## Install

```bash
npm i -D \
  @withdouble/eslint-config@^5 \
  @typescript-eslint/eslint-plugin@^5 \
  eslint@^8 \
  eslint-plugin-prettier@^4 \
  eslint-plugin-promise@^6
```

For React / Gatsby apps (`web` entry), also install:

```bash
npm i -D eslint-plugin-react@^7 eslint-plugin-react-hooks@^4
```

ESLint 7 remains supported on v5; pin `eslint@^7` if you have not upgraded yet.

## Usage

In `.eslintrc`:

```json
{
  "extends": "@withdouble/eslint-config/web"
}
```

Or for Node / API packages:

```json
{
  "extends": "@withdouble/eslint-config/common"
}
```

## Entries

| Import | Use case |
| --- | --- |
| `@withdouble/eslint-config/common` | TypeScript + Promise rules (APIs, scripts) |
| `@withdouble/eslint-config/web` | `common` + React / React Hooks rules (Gatsby, React apps) |

## Publish

```bash
npm login
npm publish --access public
```

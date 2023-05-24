# React Emotion Bun error

Steps to reproduce:

- `bun install`
- `bun build index.tsx`

```
error: Could not resolve: "@emotion/jsx-dev-runtime". Maybe you need to "bun install"?
import styled from "@emotion/styled";
```

[`index.js`](./index.js) was generated correctly like so:

```sh
mv tsconfig.json _tsconfig.json && bun build index.tsx > index.js && mv _tsconfig.json tsconfig.json
```

You can checkout the output with `bunx serve`

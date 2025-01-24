# next-template

## Getting Started

Install the dependencies:

```bash
pnpm install
```

Start the development server:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Pre-commit hooks

This project uses [Lefthook](https://github.com/evilmartians/lefthook/tree/master) to run pre-commit hooks.

The pre-commit hooks are installed automatically as part of the `postinstall` script in the [package.json](package.json).

To manually run the pre-commit hooks:

```bash
pnpm lefthook run pre-commit
```

## Environment Variables

Environment variables are type safe thanks to [t3-env](https://github.com/t3-oss/t3-env). The environment variables schema is defined in the [env.ts](src/env.ts) file and can be accessed via the `env` object.

```typescript
import { env } from "@/env"

const { PORT } = env
```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE.txt) file for details.

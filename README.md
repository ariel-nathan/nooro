# Nooro Monorepo

This monorepo contains both the frontend (Next.js) and backend (Bun + Express) applications.

## Prerequisites

- [pnpm](https://pnpm.io) (v9.14.4)
- [Bun](https://bun.sh) (for backend)
- [Node.js](https://nodejs.org) (for frontend)

## Getting Started

1. Install dependencies:

```bash
pnpm install
```

2. Setup the database:

```bash
pnpm db:migrate
pnpm db:seed
```

3. Start development servers:

```bash
pnpm dev
```

This will start both the frontend (http://localhost:3000) and backend (http://localhost:8080) in development mode.

## Available Scripts

- `pnpm dev` - Start both frontend and backend in development mode
- `pnpm build` - Build both packages
- `pnpm start` - Start both packages in production mode
- `pnpm db:migrate` - Run database migrations
- `pnpm db:seed` - Seed the database

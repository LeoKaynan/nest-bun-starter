# ⚡ NestJS + Bun + TypeScript 7 Starter

A ready to use NestJS boilerplate that runs entirely on Bun, with the native TypeScript 7 compiler, Biome, and native ES Modules.

<p align="center">
  <img src="https://img.shields.io/badge/Bun-1.3-black?logo=bun" alt="Bun" />
  <img src="https://img.shields.io/badge/NestJS-11-e0234e?logo=nestjs" alt="NestJS" />
  <img src="https://img.shields.io/badge/TypeScript-7.0%20(native)-3178c6?logo=typescript" alt="TypeScript 7" />
  <img src="https://img.shields.io/badge/Biome-2.5-60a5fa?logo=biome" alt="Biome" />
  <img src="https://img.shields.io/badge/modules-ESM-f7df1e" alt="ESM" />
</p>

## Stack

- **[Bun](https://bun.com) as the runtime.** It runs TypeScript straight from the source, so there is no separate build step while you develop, and both installs and startup are really fast.
- **NestJS 11** gives you a clean, modular architecture with dependency injection ready out of the box.
- **TypeScript 7**, the new native compiler written in Go. Type checking is much faster than the classic compiler, and here it is used only to check types, never to transpile.
- **Biome 2.5** takes care of linting and formatting in a single fast tool, with just one config file.
- **Native ES Modules** keep the project aligned with modern JavaScript.
- **Bun's built in test runner**, with a Jest compatible API, so you write and run tests without any extra tooling.

## Requirements

- [Bun](https://bun.com) 1.3 or newer

## Getting started

```bash
bun install
bun run start:dev
```

The server runs on `http://localhost:3000`. Set the `PORT` variable if you want a different port.

## Scripts

| Script                | What it does                                              |
| --------------------- | -------------------------------------------------------- |
| `bun run start`       | Run in production mode (Bun runs `src/main.ts` directly)  |
| `bun run start:dev`   | Watch mode with hot restart                              |
| `bun run start:debug` | Watch mode with the inspector attached                   |
| `bun run build`       | Compile a standalone binary to `dist/main`               |
| `bun run start:prod`  | Run the compiled binary                                  |
| `bun run typecheck`   | Type check with TypeScript 7 (`tsc --noEmit`)            |
| `bun run check`       | Biome: format, lint and organize imports                 |
| `bun run format`      | Biome: format only                                       |
| `bun run lint`        | Biome: lint only                                         |
| `bun run test`        | Unit tests                                               |
| `bun run test:e2e`    | End to end tests                                         |
| `bun run test:cov`    | Tests with coverage                                      |

## License

[MIT](./LICENSE)

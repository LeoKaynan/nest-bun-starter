import type { BunPlugin } from 'bun';
import { dirname } from 'node:path';

const externalizeUnresolvableNest: BunPlugin = {
  name: 'externalize-unresolvable-nest',
  setup(build) {
    build.onResolve({ filter: /^@nestjs\// }, (args) => {
      const from = args.importer ? dirname(args.importer) : import.meta.dir;
      try {
        Bun.resolveSync(args.path, from);
        return undefined;
      } catch {
        return { path: args.path, external: true };
      }
    });
  },
};

const result = await Bun.build({
  entrypoints: ['./src/main.ts'],
  target: 'bun',
  compile: { outfile: 'dist/main' },
  plugins: [externalizeUnresolvableNest],
});

if (!result.success) {
  for (const log of result.logs) console.error(log);
  process.exit(1);
}

console.log('✓ dist/main');

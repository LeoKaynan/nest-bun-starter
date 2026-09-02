const external = new Set<string>();

for await (const file of new Bun.Glob('node_modules/**/package.json').scan({
  cwd: import.meta.dir,
  absolute: true,
})) {
  const { peerDependenciesMeta = {} } = await Bun.file(file).json();

  for (const [dependency, metadata] of Object.entries(peerDependenciesMeta)) {
    if (!(metadata as { optional?: boolean }).optional) continue;

    try {
      Bun.resolveSync(dependency, file);
    } catch {
      external.add(`${dependency}*`);
    }
  }
}

await Bun.build({
  entrypoints: ['./src/main.ts'],
  target: 'bun',
  compile: { outfile: './dist/main' },
  external: [...external],
});

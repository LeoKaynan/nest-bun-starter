async function findUnresolvable(entry: string): Promise<string[]> {
  const external: string[] = [];
  for (let attempt = 0; attempt < 20; attempt++) {
    try {
      await Bun.build({ entrypoints: [entry], target: 'bun', external });
      return external;
    } catch (error) {
      const errors = (error as AggregateError)?.errors ?? [];
      const found = [
        ...new Set(
          errors
            .map((e) => (e as { specifier?: string })?.specifier)
            .filter((s): s is string => !!s && !external.includes(s)),
        ),
      ];
      if (found.length === 0) throw error;
      external.push(...found);
    }
  }
  return external;
}

const entry = './src/main.ts';
const external = await findUnresolvable(entry);
if (external.length > 0) {
  console.log(`externalizing missing optional peer deps: ${external.join(', ')}`);
}

await Bun.build({
  entrypoints: [entry],
  target: 'bun',
  compile: { outfile: 'dist/main' },
  external,
});

console.log('✓ dist/main');

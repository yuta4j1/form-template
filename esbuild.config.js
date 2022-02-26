require('esbuild')
  .build({
    entryPoints: ['server/index.ts'],
    bundle: true,
    platform: 'node',
    outfile: 'dist/app.js',
  })
  .catch(() => process.exit(1))
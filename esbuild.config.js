require('esbuild')
  .build({
    entryPoints: ['server/index.ts'],
    bundle: true,
    platform: 'node',
    outfile: 'dist/server.js',
  })
  .catch(() => process.exit(1))
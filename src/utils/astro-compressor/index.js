import { fileURLToPath } from 'node:url';
import { brotli, gzip } from './compress.js';
import { Logger } from './logger.js';
const defaultOptions = {
  gzip: true,
  brotli: true
};

// Copied from `astro-compressor`
export default function (opts = defaultOptions) {
  const options = { ...defaultOptions, ...opts };
  return {
    name: 'astro-compressor',
    hooks: {
      'astro:build:done': async ({ dir }) => {
        const path = fileURLToPath(dir);
        await Promise.allSettled([
          gzip(path, options.gzip),
          brotli(path, options.brotli)
        ]);
        Logger.success('Compression finished\n');
      }
    }
  };
}
//# sourceMappingURL=index.js.map

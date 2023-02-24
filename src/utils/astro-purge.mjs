import { PurgeCSS } from 'purgecss';
import { writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';

// Copied from `astro-purgecss`
function handleWindowsPath(outputPath) {
  if (process.platform !== 'win32') return outputPath;
  if (outputPath.endsWith('\\')) {
    outputPath = outputPath.substring(0, outputPath.length - 1);
  }
  outputPath = outputPath.replaceAll('\\', '/');
  return outputPath;
}
function src_default(options = {}) {
  return {
    name: 'astro-purgecss',
    hooks: {
      'astro:build:done': async ({ dir }) => {
        const outDir = handleWindowsPath(fileURLToPath(dir));
        const purged = await new PurgeCSS().purge({
          ...options,
          content: [
            `${outDir}/**/*.html`,
            `${outDir}/**/*.astro`,
            `${outDir}/**/*.js`
          ],
          css: [`${outDir}/**/*.css`],
          defaultExtractor(content) {
            const contentWithoutStyleBlocks = content.replace(
              /<style[^]+?<\/style>/gi,
              ''
            );

            return (
              contentWithoutStyleBlocks.match(
                /[A-Za-z0-9-_/:]*[A-Za-z0-9-_/]+/g
              ) || []
            );
          }
        });
        await Promise.all(
          purged
            .filter(({ file }) =>
              file == null ? void 0 : file.endsWith('.css')
            )
            .map(async ({ css, file }) => await writeFile(file, css))
        );
      }
    }
  };
}
export { src_default as default };

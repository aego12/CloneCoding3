import { cpSync, mkdirSync, rmSync } from 'node:fs';

rmSync('dist', { recursive: true, force: true });
mkdirSync('dist', { recursive: true });
for (const path of ['index.html', 'css', 'js', 'images', 'f']) {
  cpSync(path, `dist/${path}`, { recursive: true });
}

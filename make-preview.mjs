// Gera uma prévia HTML offline e autocontida, sem hospedagem ou publicação.
import { readFileSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join, resolve } from 'node:path';

const root = dirname(fileURLToPath(import.meta.url));
const output = resolve(root, '..', 'aduna-preview.html');
const text = (path) => readFileSync(join(root, path), 'utf8');
const mime = (path) => path.endsWith('.svg') ? 'image/svg+xml' : path.endsWith('.webp') ? 'image/webp' : 'image/png';
const asData = (path) => `data:${mime(path)};base64,${readFileSync(join(root, path)).toString('base64')}`;

let css = text('assets/css/style.css');
css = css.replaceAll('../img/grain.webp', asData('assets/img/grain.webp'));
const js = text('assets/js/main.js');
let html = text('index.html');
html = html.replace(/<link rel="preload"[^>]+hero-orbit\.svg[^>]*>\s*/,'');
html = html.replace('<link rel="stylesheet" href="assets/css/style.css">', `<style>\n${css}\n</style>`);
html = html.replace('<script src="assets/js/main.js" defer></script>', '');
html = html.replace(/(src|href)="(assets\/img\/[^\"]+)"/g, (_all, attr, path) => `${attr}="${asData(path)}"`);
html = html.replace('</body>', `<script>\n${js}\n</script>\n</body>`);
html = html.replace('<!doctype html>', '<!doctype html>\n<!-- Prévia offline autocontida. Nenhum deploy foi feito. -->');
writeFileSync(output, html);
console.log(output);

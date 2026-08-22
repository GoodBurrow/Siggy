const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');

const root = path.join(__dirname, '..');

function read(file) {
  return fs.readFileSync(path.join(root, file), 'utf8');
}

test('app shell keeps privacy-first search metadata', () => {
  const html = read('index.html');

  assert.match(html, /<title>Free Email Signature Generator/);
  assert.match(html, /<meta name="description" content="[^"]*Gmail, Outlook, Apple Mail[^"]*no account, ads, or tracking/i);
  assert.match(html, /<meta name="robots" content="index,follow">/);
  assert.match(html, /<link rel="canonical" href="https:\/\/goodburrow\.github\.io\/Siggy\/">/);
  assert.match(html, /"@type": "SoftwareApplication"/);
  assert.match(html, /"No account required"/);
});

test('referenced local assets exist', () => {
  const html = read('index.html');
  const localRefs = Array.from(html.matchAll(/(?:src|href)="([^":#?]+)(?:\?[^"]*)?"/g), (match) => match[1])
    .filter((ref) => !ref.startsWith('mailto:') && !ref.startsWith('tel:') && !ref.includes('${'));
  const generatedAvatarRefs = Array.from({ length: 48 }, (_, index) => `assets/avatars/avatar-${index + 1}.png`);
  const requiredRefs = [
    ...localRefs,
    ...generatedAvatarRefs,
    'assets/icons/siggy-app-icon.png',
  ];

  assert.ok(requiredRefs.length > 50, 'expected local icon and avatar references');
  for (const ref of requiredRefs) {
    assert.ok(fs.existsSync(path.join(root, ref)), `Missing asset: ${ref}`);
  }
});

test('the README points users at the published app and local run path', () => {
  const readme = read('README.md');

  assert.match(readme, /https:\/\/goodburrow\.github\.io\/Siggy\//);
  assert.match(readme, /python3 -m http\.server 4174/);
  assert.match(readme, /No account/);
  assert.match(readme, /No tracking/);
});

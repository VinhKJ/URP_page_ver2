import { existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import { spawnSync } from 'child_process';

const __dirname = dirname(fileURLToPath(import.meta.url));
const projectRoot = join(__dirname, '..');

const requiredPackages = [
  'vite',
  '@vitejs/plugin-react',
  'esbuild',
  'tailwindcss',
  'postcss',
  'autoprefixer'
];

const missingPackages = requiredPackages.filter((pkg) => {
  return !existsSync(join(projectRoot, 'node_modules', pkg, 'package.json'));
});

if (missingPackages.length === 0) {
  process.exit(0);
}

console.log(`Missing build-time dependencies: ${missingPackages.join(', ')}`);
console.log('Installing dev dependencies with "npm install --include=dev"...');

const npmCmd = process.platform === 'win32' ? 'npm.cmd' : 'npm';
const result = spawnSync(npmCmd, ['install', '--include=dev'], {
  cwd: projectRoot,
  stdio: 'inherit'
});

if (result.status !== 0) {
  console.error('Failed to install dev dependencies required for the build.');
  process.exit(result.status ?? 1);
}

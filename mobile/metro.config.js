// mobile/metro.config.js
const path = require('path');
const { getDefaultConfig } = require('expo/metro-config');

const projectRoot = __dirname;                 // repo/mobile
const workspaceRoot = path.resolve(projectRoot, '..'); // repo

const config = getDefaultConfig(projectRoot);

// Tell Metro to watch the workspace root so we can import ../shared
config.watchFolders = [workspaceRoot];

// Make pnpm/monorepo resolution work
config.resolver.nodeModulesPaths = [
  path.join(projectRoot, 'node_modules'),
  path.join(workspaceRoot, 'node_modules'),
];
config.resolver.unstable_enableSymlinks = true;

// Aliases for clean imports
config.resolver.alias = {
  ...(config.resolver.alias || {}),
  '@': projectRoot,
  '@shared': path.join(workspaceRoot, 'shared'),
};

// IMPORTANT: don't override transformer/sourceExts—keep Expo defaults
module.exports = config;

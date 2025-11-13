// mobile/metro.config.js
const path = require('path');
const { getDefaultConfig } = require('expo/metro-config');
const { withNativeWind } = require('nativewind/metro');

const projectRoot = __dirname;                 // repo/mobile
const workspaceRoot = path.resolve(projectRoot, '..'); // repo

const config = getDefaultConfig(projectRoot);

// read files outside the app folder
config.watchFolders = [workspaceRoot];

config.resolver.extraNodeModules = {
  react: path.resolve(__dirname, 'node_modules/react'),
  'react-native': path.resolve(__dirname, 'node_modules/react-native'),
};

module.exports = withNativeWind(config, { input: './global.css' })

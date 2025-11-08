// mobile/metro.config.js
const path = require('path');
const { getDefaultConfig } = require('expo/metro-config');

const projectRoot = __dirname;                 // repo/mobile
const workspaceRoot = path.resolve(projectRoot, '..'); // repo

const config = getDefaultConfig(projectRoot);

// read files outside the app folder
config.watchFolders = [workspaceRoot];

module.exports = config;

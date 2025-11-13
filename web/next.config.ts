import type { NextConfig } from 'next';
import { join } from 'path';

const nextConfig: NextConfig = {
  transpilePackages: [
    'react-native',
    'react-native-web',
    'expo',
    'expo-modules-core',
    '@expo/vector-icons',
    'react-native-svg',
    'react-native-reanimated',
    join(__dirname, '../shared')
  ],

  experimental: { externalDir: true },

  turbopack: {
    resolveAlias: {
      'react-native': 'react-native-web'
    }
  }
};

export default nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { isServer }) => {
    // Fix for Windows ESM URL scheme error
    config.output.webassemblyModuleFilename = '../static/wasm/[modulehash].wasm';
    
    return config;
  },
};

export default nextConfig;

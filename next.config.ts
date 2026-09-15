import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  webpack: (config) => {
    // The project lives on an exFAT volume, which has no symlink support.
    // Node's fs.readlink misbehaves on exFAT (throws EISDIR on regular
    // files), which breaks webpack's symlink resolution during builds.
    config.resolve.symlinks = false;
    // Webpack's persistent filesystem cache also calls fs.readlink while
    // snapshotting resolve dependencies, which hits the same exFAT bug.
    config.cache = false;
    return config;
  },
};

export default nextConfig;

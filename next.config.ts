import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* No custom cache headers needed.
     Next.js already hashes all static assets in _next/static/ with content-hash filenames.
     HTML pages are served fresh on each deploy. */
};

export default nextConfig;

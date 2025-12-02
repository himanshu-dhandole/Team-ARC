// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // This allows ANY external image (great for portfolios/demo)
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",        // ← allows every domain
      },
      {
        protocol: "http",
        hostname: "**",
      },
    ],
    // OR if you want to be slightly more secure, whitelist only the domains you use:
    // remotePatterns: [
    //   { protocol: "https", hostname: "image2url.com" },
    //   { protocol: "https", hostname: "via.placeholder.com" },
    //   { protocol: "https", hostname: "yourdomain.com" },
    // ],
  },
};

export default nextConfig;
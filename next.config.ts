/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // ✅ "domains" is deprecated — you can remove it
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.pinimg.com",
      },
      {
        protocol: "https",
        hostname: "firebasestorage.googleapis.com",
      },
    ],
  },

  // ✅ Add this to fix cross-origin warning when testing from another device
  experimental: {
    allowedDevOrigins: ["http://192.168.1.2:3000"], // replace with your LAN IP if different
  },
};

module.exports = nextConfig;

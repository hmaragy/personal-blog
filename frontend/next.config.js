module.exports = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: "/uploads/:path*",
        destination: "http://localhost:1337/uploads/:path*", // Proxy to Backend
      },
    ];
  },
};

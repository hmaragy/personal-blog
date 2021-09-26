const path = require("path");
require("dotenv").config();

module.exports = {
  env: {
    API_URL: process.env.API_URL,
  },
  reactStrictMode: true,
  async rewrites() {
    return {
      beforeFiles: [
        {
          source: "/uploads/:path*",
          destination: process.env.API_URL + "/uploads/:path*",
        },
      ],
    };
  },
  webpack(config) {
    config.resolve.alias = {
      ...config.resolve.alias,
      components: path.join(__dirname, "components/"),
      public: path.join(__dirname, "public/"),
    };

    return config;
  },
};

const rewriteRoutes = ["/with-rewrite", "/with-rewrite/:slug"];

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return {
      afterFiles: rewriteRoutes.map((route) => {
        return {
          source: route,
          has: [
            {
              type: "cookie",
              key: "language",
              value: "(?<language>.*)",
            },
          ],
          destination: `/language/:language${route}`,
        };
      }),
    };
  },
};

module.exports = nextConfig;

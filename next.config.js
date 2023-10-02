/** @type {import('next').NextConfig} */

const BASE_PREFIX_FOR_APP = "/portfolio";

const nextConfig = {
  async rewrites() {
    return [
      {
        /** ASSET PREFIX */
        source: `${BASE_PREFIX_FOR_APP}/_next/:path*`,
        destination: "/_next/:path*",
      },
      {
        /** IMAGE PREFIX */
        source: `${BASE_PREFIX_FOR_APP}/images/:query*`,
        destination: "/_next/image/:query*",
      },
      /** API PREFIX */
      {
        source: `${BASE_PREFIX_FOR_APP}/api/:path*`,
        destination: "/api/:path*",
      },
    ];
  },
  outDir: "out",
  // /**
  //  * Enable static exports for the App Router.
  //  *
  //  * @see https://nextjs.org/docs/pages/building-your-application/deploying/static-exports
  //  */
  // output: "export",

  /**
   * Set base path. This is usually the slug of your repository.
   *
   * @see https://nextjs.org/docs/app/api-reference/next-config-js/basePath
   */
  basePath: "/portfolio",

  /**
   * Disable server-based image optimization. Next.js does not support
   * dynamic features with static exports.
   *
   * @see https://nextjs.org/docs/pages/api-reference/components/image#unoptimized
   */
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;

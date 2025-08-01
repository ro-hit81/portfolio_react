import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'Permissions-Policy',
            value: 'browsing-topics=(), join-ad-interest-group=(), private-state-token-issuance=(), private-state-token-redemption=(), run-ad-auction=(), attribution-reporting=(), private-aggregation=()'
          }
        ]
      }
    ]
  }
};

export default nextConfig;

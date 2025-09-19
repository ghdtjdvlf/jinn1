import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  devIndicators: false, // 개발자용 빌드 인디케이터 제거
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "raw.githubusercontent.com",
      },
      {
        protocol: "https",
        hostname: "github.com", // user-attachments, ?raw=1
      },
      {
        protocol: "https",
        hostname: "user-images.githubusercontent.com",
      },
    ],
    unoptimized: true, // ✅ Netlify 정적 export 시 필수
  },
  output: "export", // ✅ Netlify 배포용 (정적 export)
};

export default nextConfig;

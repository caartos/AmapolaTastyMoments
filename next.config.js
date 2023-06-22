/** @type {import('next').NextConfig} */

const ContentSecurityPolicy = `
  default-src 'none';
  img-src 'self';
`

const nextConfig = {
  serverRuntimeConfig: {
    // Configura el límite de tamaño del cuerpo de la solicitud
    maxBodySize: 10 * 1024 * 1024, // 10MB
  },
  // async headers() {
  //   return [
  //     {
  //       source: '/api/(.*)',
  //       headers: [
  //         {
  //           key: 'Content-Security-Policy',
  //           value: ContentSecurityPolicy.replace(/\s{2,}/g, ' ').trim(),
  //         },
  //       ],
  //     },
  //   ];
  // },
};

module.exports = nextConfig;

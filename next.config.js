/** @type {import('next').NextConfig} */

module.exports = {
  env: {
    BASE_URL: 'http://homologacao3.azapfy.com.br/api/ps/metahumans',
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.jsdelivr.net'
      }
    ],
  },
}

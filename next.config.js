/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
        return [
            {
                source: '/api/:path*',
                destination: 'http://localhost:3000/api/:path*', // 실제 API 서버 주소로 변경
            },
        ];
    },
}

module.exports = nextConfig
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  images: {
    domains: ["cdn.sanity.io", "th.bing.com", 'fullstackdotso.nyc3.cdn.digitaloceanspaces.com', 'example.com', 'm.media-amazon.com', 
      'images.pexels.com'
    ],
  },
}

export default nextConfig

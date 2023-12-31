/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
   images:{
    remotePatterns:[
        {
            protocol:"http",
            hostname:"127.0.0.1",
            port:"1337"
        },{
            protocol:"https",
            hostname:"images.unsplash.com"
        },{
            protocol:"https",
            hostname:"ashish-portfolio-6fd7.onrender.com"
        },{
            protocol:"https",
            hostname:"res.cloudinary.com"
        }
    ]
   }
}

module.exports = nextConfig

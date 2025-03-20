// next-sitemap.config.js
module.exports = {
    siteUrl: "https://educaavalia.com.br",
    generateRobotsTxt: true,
    sitemapSize: 7000,
    robotsTxtOptions: {
        policies: [
            { userAgent: "*", allow: "/" },
            { userAgent: "Googlebot-Image", allow: "/" },
        ],
    },
    exclude: ["/server-sitemap.xml", "/404", "/admin/*"],
};

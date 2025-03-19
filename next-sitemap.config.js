// next-sitemap.config.js
module.exports = {
    siteUrl: process.env.SITE_URL || "https://educaavalia.com.br",
    generateRobotsTxt: true,
    robotsTxtOptions: {
        policies: [
            { userAgent: "*", allow: "/" },
            { userAgent: "Googlebot-Image", allow: "/" },
        ],
        additionalSitemaps: ["https://educaavalia.com.br/sitemap.xml"],
    },
    exclude: ["/server-sitemap.xml", "/404", "/admin/*"],
};

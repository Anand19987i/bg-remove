/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: 'https://bg-remover.vercel.app',
    generateRobotsTxt: true,
    sitemapSize: 5000,
    changefreq: 'weekly',
    priority: 0.7,
    exclude: ['/server-scripts', '/private'],
    robotsTxtOptions: {
      policies: [
        {
          userAgent: '*',
          allow: '/',
        },
      ],
    },
  };
  
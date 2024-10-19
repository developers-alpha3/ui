module.exports = {
  siteUrl: 'https://www.yournewspage.com',
  generateRobotsTxt: true,
  exclude: ['/server-sitemap.xml'], // Exclude server-side generated sitemap
  robotsTxtOptions: {
    additionalSitemaps: [
      'https://www.yournewspage.com/server-sitemap.xml', // Add server-side generated sitemap
    ],
  },
};

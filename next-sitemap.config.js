/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://craftkit.netlify.app",
  generateRobotsTxt: true, 
  sitemapSize: 7000,
  changefreq: "monthly",
  priority: 0.7,
  exclude: ["/404"],
};

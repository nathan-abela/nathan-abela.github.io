const fs = require('fs');
const path = require('path');

const SITE_URL = require('../package.json').homepage.replace(/\/$/, '');
const STATIC_ROUTES = ['/', '/about', '/education', '/work', '/portfolio'];

const portfolioDir = path.join(__dirname, '..', 'src', 'pages', 'data', 'portfolio');
const portfolioRoutes = fs
	.readdirSync(portfolioDir)
	.filter((file) => file.endsWith('.mdx'))
	.map((file) => `/portfolio/${path.basename(file, '.mdx')}`);

const urls = [...STATIC_ROUTES, ...portfolioRoutes]
	.map((route) => `\t<url>\n\t\t<loc>${SITE_URL}${route}</loc>\n\t</url>`)
	.join('\n');

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;

fs.writeFileSync(path.join(__dirname, '..', 'public', 'sitemap.xml'), sitemap);
console.log(`sitemap.xml generated with ${STATIC_ROUTES.length + portfolioRoutes.length} urls`);

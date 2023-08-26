import fs from 'fs';
import { join } from 'path';
import matter from 'gray-matter';

type MdxType = 'PORTFOLIO' | 'PAGES';

const portfolioDirectory = 'src/pages/data/portfolio';
const pagesDirectory = 'src/pages';

export function getSlugs(type: MdxType) {
	let dir;

	switch (type) {
		case 'PORTFOLIO':
			dir = join(process.cwd(), portfolioDirectory);
			break;
		case 'PAGES':
			dir = join(process.cwd(), pagesDirectory);
			break;
	}

	return fs.readdirSync(dir);
}

export function getBySlug(type: MdxType, slug: string, fields: string[] = []) {
	const realSlug = slug.replace(/\.mdx$/, '');
	let fullPath = '';

	switch (type) {
		case 'PORTFOLIO':
			fullPath = join(portfolioDirectory, `${realSlug}.mdx`);
			break;
		case 'PAGES':
			fullPath = join(pagesDirectory, `${realSlug}.mdx`);
			break;
	}

	try {
		const fileContents = fs.readFileSync(fullPath, 'utf8');

		const { data, content } = matter(fileContents);
		const items: Record<string, string> = {};
		fields.forEach((field) => {
			if (field === 'slug') {
				items[field] = realSlug;
			}
			if (field === 'content') {
				items[field] = content;
			}
			if (data[field]) {
				items[field] = data[field];
			}
		});

		return items;
	} catch {
		return null;
	}
}

export function getAllDocuments(type: MdxType, fields: string[] = []) {
	const slugs = getSlugs(type);
	const documents = slugs.map((slug) => getBySlug(type, slug, fields));

	return documents;
}

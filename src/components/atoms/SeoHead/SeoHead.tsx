import { FC } from 'react';
import Head from 'next/head';

const SITE_URL = 'https://nathan-abela.github.io';

export interface HeadProps {
	title: string;
	description: string;
	path?: string;
	keywords?: string;
	author?: string;
	image?: string;
	meta?: Array<{
		name: string;
		content: string;
	}>;
}

const SeoHead: FC<HeadProps> = ({
	title,
	description,
	path = '/',
	author = 'Nathan Abela',
	keywords,
	image = `${SITE_URL}/og.png`,
	meta,
}) => {
	const url = `${SITE_URL}${path}`;

	return (
		<Head>
			<title>{title}</title>
			<meta name="description" content={description} />
			<meta name="author" content={author} />
			<link rel="canonical" href={url} />
			<meta property="og:title" content={title} />
			<meta property="og:description" content={description} />
			<meta property="og:type" content="website" />
			<meta property="og:url" content={url} />
			{meta &&
				meta.length > 0 &&
				meta.map(({ name, content }) => <meta name={name} content={content} key={name} />)}
			{image && <meta property="og:image" content={image} />}
			{keywords && <meta name="keywords" content={keywords} />}
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{
					__html: `{"@context":"http://schema.org","@type":"WebSite","name":"nathan-abela.github.io","alternateName":"Nathan Abela","url":"${SITE_URL}/","description":"Software Engineer from Malta building web applications with TypeScript, Stencil.js, and Next.js.","image":"${image}"}`,
				}}
			/>
		</Head>
	);
};

export { SeoHead };

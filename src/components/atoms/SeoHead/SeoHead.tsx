import { FC } from 'react';
import Head from 'next/head';
import { siteConfig } from 'Config/site';

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
	author = siteConfig.name,
	keywords,
	image = `${siteConfig.url}/og.png`,
	meta,
}) => {
	const url = `${siteConfig.url}${path}`;

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
			<meta name="twitter:card" content="summary_large_image" />
			<meta name="twitter:title" content={title} />
			<meta name="twitter:description" content={description} />
			{image && <meta name="twitter:image" content={image} />}
			{keywords && <meta name="keywords" content={keywords} />}
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{
					__html: `{"@context":"http://schema.org","@graph":[{"@type":"WebSite","name":"nathan-abela.github.io","alternateName":"${siteConfig.name}","url":"${siteConfig.url}/","description":"${siteConfig.description}","image":"${image}"},{"@type":"Person","name":"${siteConfig.name}","jobTitle":"${siteConfig.jobTitle}","url":"${siteConfig.url}/","sameAs":["${siteConfig.links.github}","${siteConfig.links.linkedin}","${siteConfig.links.youtube}"]}]}`,
				}}
			/>
		</Head>
	);
};

export { SeoHead };

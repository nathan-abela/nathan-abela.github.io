import Image from 'next/image';
import { MDXRemote } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import styled from 'styled-components';

import { Button } from 'Atoms/Button';
import { Container } from 'Atoms/Container';
import { SeoHead } from 'Atoms/SeoHead';

import { shimmer } from 'Utils/shimmer';
import { getAllDocuments, getBySlug } from 'Utils/api';

export default function PortfolioPost({ item, mdxSource }: any) {
	const { title, link, type, technologies, slug } = item;

	const components = {
		img: (props: any) => (
			/* eslint-disable-next-line prettier/prettier */
			<Image
				{...props}
				width={1920}
				height={1080}
				objectFit="cover"
			/>
		),
	};

	return (
		<>
			{/* eslint-disable-next-line prettier/prettier */}
			<SeoHead
				title="Nathan Abela - Portfolio"
				description={`Project ${title} developed by Nathan Abela`}
			/>

			<Container>
				<Image
					src={`/portfolio/${slug}.jpg`}
					width={1920}
					height={1080}
					objectFit="cover"
					alt={`Screenshot of ${title}`}
					placeholder="blur"
					blurDataURL={shimmer(1920, 1080)}
					style={{ borderRadius: 4 }}
				/>

				<Headline>{title}</Headline>
				<h3>{type}</h3>
				<MDXRemote {...mdxSource} components={components} />

				<h4>Technologies used:</h4>

				{technologies.map((tech: string) => (
					<li key={tech}>{tech}</li>
				))}

				<Button href={link} target="_blank">
					Visit project
				</Button>
			</Container>
		</>
	);
}

export async function getStaticProps({ params }: any) {
	const item = getBySlug('PORTFOLIO', params.slug, ['title', 'slug', 'link', 'type', 'technologies', 'content']);

	if (!item?.content) return {};

	const mdxSource = await serialize(item.content);

	return {
		props: { item, mdxSource },
	};
}

export async function getStaticPaths() {
	const items = getAllDocuments('PORTFOLIO', ['slug']);

	return {
		paths: items.map((item) => {
			return {
				params: { ...item },
			};
		}),
		fallback: false,
	};
}

const Headline = styled.h2`
	font-size: 32px;
	margin-bottom: 0;

	@media screen and (max-width: 768px) {
		font-size: 24px;
	}
`;
